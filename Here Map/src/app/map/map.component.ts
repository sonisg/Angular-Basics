import { Component, OnInit } from '@angular/core';

declare const H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private platform: any;
  private map: any;
  private router: any;

  constructor() {
    this.platform = new H.service.Platform({
      apikey: 'eyrBvQOILg8-rN42YZv8mbO_QDnsExR35ddNlyCRr2g' 
    });
  }

  ngOnInit(): void {
    this.initializeMap();
    this.calculateRoute();
  }

  initializeMap(): void {
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        // center: { lat: 0, lng: 0 },
        // zoom: 2,
        zoom: 7,
        center: { lat: 32.544753, lng:  -83.580947},
        pixelRatio: window.devicePixelRatio || 1
      }
    );
    window.addEventListener('resize', () => this.map.getViewPort().resize());
  }

  calculateRoute(): void {
    const locations = [
       { lat: 31.660653, lng: -84.168716, label: 'PXL' },
      { lat: 32.544753, lng: -83.580947, label: 'PXB' },
       { lat: 33.9061, lng: -84.46, label: 'demo' }
    ];

    const routingParameters = {
      mode: 'fastest;car',
      waypoint0: `geo!${locations[0].lat},${locations[0].lng}`,
      waypoint1: `geo!${locations[1].lat},${locations[1].lng}`,
      waypoint2: `geo!${locations[2].lat},${locations[2].lng}`,
      representation: 'display'
    };

    this.router = this.platform.getRoutingService();
    this.router.calculateRoute(routingParameters, this.onRouteSuccess.bind(this), this.onRouteError.bind(this));
  }

  onRouteSuccess(result: any): void {
    const route = result.response.route[0];

    const lineString = new H.geo.LineString();
    route.shape.forEach((point: any) => {
      const parts = point.split(',');
      lineString.pushLatLngAlt(parts[0], parts[1]);
    });

    const routePolyline = new H.map.Polyline(lineString, {
      style: { strokeColor: 'blue', lineWidth: 3 }
    });

    this.map.addObject(routePolyline);

    route.waypoint.forEach((waypoint: any, index: number) => {
      const marker = new H.map.Marker({
        lat: waypoint.mappedPosition.latitude,
        lng: waypoint.mappedPosition.longitude
      });
      this.map.addObject(marker);
      marker.label = index + 1;
    });

    this.map.getViewModel().setLookAtData({ bounds: route.boundingBox});
  }

  onRouteError(error: any): void {
    console.error('Error calculating route:', error);
  }
}
