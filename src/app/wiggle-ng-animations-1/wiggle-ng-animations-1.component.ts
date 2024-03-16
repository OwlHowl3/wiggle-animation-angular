import { Component } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-wiggle-ng-animations-1',
  standalone: true,
  imports: [],
  templateUrl: './wiggle-ng-animations-1.component.html',
  styleUrl: './wiggle-ng-animations-1.component.scss',
  animations: [
    trigger('wiggle', [
      state(
        'start',
        style({
          rotate: '0deg',
        })
      ),
      state(
        'end',
        style({
          rotate: '0deg',
        })
      ),
      transition(
        'start <=> end',
        animate(
          '1s',
          keyframes([
            style({ rotate: '-10deg', offset: 0.25 }),
            style({ rotate: '10deg', offset: 0.5 }),
            style({ rotate: '-10deg', offset: 0.75 }),
          ])
        )
      ),
    ]),
  ],
})
export class WiggleNgAnimations1Component {
  wiggle = 'start';

  toggleWiggle() {
    this.wiggle = this.wiggle == 'start' ? 'end' : 'start';
  }
}
