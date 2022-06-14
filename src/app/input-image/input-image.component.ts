import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ShowInputTemplate} from "../Abstract/showInputTemplate";

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.css']
})
export class InputImageComponent extends ShowInputTemplate implements OnInit {

  public file: string;
  public archivoCapturado: any;
  constructor(private sanitizer: DomSanitizer) {
    super();
    this.file = '';

  }

  ngOnInit(): void {
  }

  public operationsForRenderInput(): void {
    this.base64forImage(this.archivoCapturado).then((image : any) => {
      this.file = image.base;
    })
  }

  captureFile(event: any): any{
    this.archivoCapturado = event.target.files[0];
  }


  base64forImage = async ($event: any) => new Promise<any>((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
         resolve({
           base: reader.result
        });
      };
      reader.onerror = error => {
          resolve({
          base: null
        });
      };
    } catch (e){
      return null
    }
    return null;
  })

}
