import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputImageComponent } from './input-image/input-image.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputColorComponent } from './input-color/input-color.component';
import {AppRoutingModule} from "./routes/app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InputImageComponent,
    InputTextComponent,
    InputColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
