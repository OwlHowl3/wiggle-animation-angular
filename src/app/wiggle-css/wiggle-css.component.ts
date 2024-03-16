import { Component } from '@angular/core';
import {WiggleDirective} from "../wiggle.directive";

@Component({
  selector: 'app-wiggle-css',
  standalone: true,
  imports: [
    WiggleDirective
  ],
  templateUrl: './wiggle-css.component.html',
  styleUrl: './wiggle-css.component.scss'
})
export class WiggleCssComponent {

}
