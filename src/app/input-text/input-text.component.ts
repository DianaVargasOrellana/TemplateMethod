import { Component, OnInit } from '@angular/core';
import {ShowInputTemplate} from "../Abstract/showInputTemplate";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent extends ShowInputTemplate implements OnInit {


  public text: string;
  constructor() {
    super();
    this.text = '';
  }

  ngOnInit(): void {
  }



  operationsForRenderInput(): void {
  }

}
