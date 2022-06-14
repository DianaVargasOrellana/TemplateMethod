import { Component, OnInit } from '@angular/core';
import {ShowInputTemplate} from "../Abstract/showInputTemplate";

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.css']
})
export class InputColorComponent extends ShowInputTemplate implements OnInit {

  public color;
  public bgcolor;
  constructor() {
    super();
    this.color = '#000000';
    this.bgcolor = '';
  }

  ngOnInit(): void {
  }


  operationsForRenderInput(): void {
    this.bgcolor = this.color;
  }

}
