import {Routes} from "@angular/router";
import {InputImageComponent} from "../input-image/input-image.component";
import {InputTextComponent} from "../input-text/input-text.component";
import {InputColorComponent} from "../input-color/input-color.component";

export const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: 'text', pathMatch: 'full'
  },
  {
    path: 'text', component: InputTextComponent
  },
  {
    path: 'color', component: InputColorComponent
  },
  {
    path: 'image', component: InputImageComponent
  }
];
