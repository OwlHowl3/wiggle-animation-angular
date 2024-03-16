import { Component } from '@angular/core';
import {WiggleDirective} from "../wiggle.directive";

@Component({
  selector: 'app-wiggle-css-directive',
  standalone: true,
  imports: [
      WiggleDirective
  ],
  templateUrl: './wiggle-css-directive.component.html',
  styleUrl: './wiggle-css-directive.component.scss'
})
export class WiggleCssDirectiveComponent {

}
