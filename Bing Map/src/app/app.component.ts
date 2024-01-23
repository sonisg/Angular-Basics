import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

declare var Microsoft: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  map: any;
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=AilAynsuKe4pQ52mYxRzFn-wq9H34d2nEacXonkhBiZ_1zfNBvasFwTPF07kh5kZ&callback=initMap`;
  
    (window as any).initMap = () => {
      this.initializeMap();
    };
  
    document.body.appendChild(script);
  }
  
  initializeMap() {
    this.map = new Microsoft.Maps.Map(this.mapContainer.nativeElement, {
      //credentials: 'AilAynsuKe4pQ52mYxRzFn-wq9H34d2nEacXonkhBiZ_1zfNBvasFwTPF07kh5kZ'
    });
  
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', () => {
      const directionsManager = new Microsoft.Maps.Directions.DirectionsManager(this.map);
  
      const locations = [
        { latitude: 29.7604, longitude: -95.3698, address: 'Houston, USA' },
        { latitude: 33.4709, longitude: -81.9748, address: 'Augusta, USA' },
        // Add more locations as needed
      ];
  
      for (const location of locations) {
        const waypoint = new Microsoft.Maps.Directions.Waypoint({
          location: new Microsoft.Maps.Location(location.latitude, location.longitude),
          address: location.address,
          pushpinOptions: {
            visible: false
          }
        });
  
        // Remove pushpins from the waypoints
        waypoint.setOptions({ icon: null });
  
        directionsManager.addWaypoint(waypoint);
      }

      directionsManager.setRenderOptions({
        firstWaypointPushpinOptions: { visible: false },
        lastWaypointPushpinOptions: { visible: false },
        waypointPushpinOptions: { visible: false }
    });


      directionsManager.calculateDirections();
    });
  }
  
  
}
