import {Component, ElementRef, ViewChild} from '@angular/core';
import {WiggleDirective} from "../wiggle.directive";

@Component({
  selector: 'app-wiggle-css-click',
  standalone: true,
  templateUrl: './wiggle-css-click.component.html',
  imports: [
    WiggleDirective
  ],
  styleUrl: './wiggle-css-click.component.scss'
})
export class WiggleCssClickComponent {
  @ViewChild("wiggleButton") wiggleButton! : ElementRef<HTMLButtonElement>;

  onWiggleClick() {
    this.wiggleButton.nativeElement.classList.remove("wiggle");
    this.wiggleButton.nativeElement.offsetWidth;
    this.wiggleButton.nativeElement.classList.add("wiggle");
  }
}
