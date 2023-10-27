import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() title: string;

  counter = 0;

  @Output() counterIncremented = new EventEmitter<number>();

  incrementCounter() {
    this.counter++;
    this.counterIncremented.emit(this.counter);
  }
  constructor() { }

  ngOnInit() {
  }

}
