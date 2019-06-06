import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
 
  @Output()
  public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  
  myEvent(value){
    console.log("executed", value);
    this.childEvent.emit(value);
  }
}
