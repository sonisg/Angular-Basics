import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesang';

  
     presentDate = new Date();
     price : number = 20000;
     decimalNum1: number = 0.8178;
     Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
     jsonData = { id: 'one', name: { username: 'user1' }}
     digits : number = 1009886;
 

     timeChange = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000); });
}
