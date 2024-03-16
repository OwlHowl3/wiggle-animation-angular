import { Component } from '@angular/core';
import {animate, AnimationEvent, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-wiggle-ng-animations-2',
  standalone: true,
  imports: [],
  templateUrl: './wiggle-ng-animations-2.component.html',
  styleUrl: './wiggle-ng-animations-2.component.scss',
  animations: [
    trigger('wiggle', [
      state(
        'default',
        style({
          rotate: '0deg',
        })
      ),
      transition(
        '* => default',
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
export class WiggleNgAnimations2Component {
  wiggle = '';

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'default') {
      this.wiggle = ''; // Reset the state to trigger the animation again
    }
  }
}
