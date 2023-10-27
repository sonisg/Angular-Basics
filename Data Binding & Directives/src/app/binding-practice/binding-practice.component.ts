import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent implements OnInit {

  appName = "String Interpolation";
  propertyName = "Property Binding";
  userName:string = " ";

  myCSSClass = "red";
 applyCSSClass = false;
  constructor() { }

  ngOnInit() {
  }

  public showData($event : any){
    console.log("Event Clicked");
  }

  public showData1(){
    console.log("Event 1 Clicked");
  }
}
