import {
  AnimationEvent,
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, map, tap } from 'rxjs';
import {WiggleCssClickComponent} from "./wiggle-css-click/wiggle-css-click.component";
import {WiggleCssComponent} from "./wiggle-css/wiggle-css.component";
import {WiggleCssDirectiveComponent} from "./wiggle-css-directive/wiggle-css-directive.component";
import {WiggleNgAnimations1Component} from "./wiggle-ng-animations-1/wiggle-ng-animations-1.component";
import {WiggleNgAnimations2Component} from "./wiggle-ng-animations-2/wiggle-ng-animations-2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WiggleCssClickComponent, WiggleCssComponent, WiggleCssDirectiveComponent, WiggleNgAnimations1Component, WiggleNgAnimations2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
export class AppComponent implements OnInit {
  correctAnswer = 'angular';
  currentAnswer = '';
  score = 0;
  wiggle = '';

  ngOnInit() {
    fromEvent<KeyboardEvent>(document, 'keyup')
      .pipe(
        tap((e) => {
          if (e.key == 'Enter') {
            if (this.currentAnswer.length == this.correctAnswer.length) {
              if (this.currentAnswer === this.correctAnswer) {
                this.score++;
              } else {
                this.score--;
              }
              this.currentAnswer = '';
            } else {
              // wiggle letters
              this.wiggle = 'default';
            }
          }

          if (e.key == 'Backspace' && this.currentAnswer.length > 0) {
            this.currentAnswer = this.currentAnswer.slice(0, -1);
          }

          if (
            e.key.length == 1 &&
            e.key.match(/[a-z]/i) &&
            this.currentAnswer.length < this.correctAnswer.length
          ) {
            this.currentAnswer += e.key;
          }
          console.log(this.currentAnswer, this.correctAnswer);
        })
      )
      .subscribe();
  }

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'default') {
      this.wiggle = ''; // Reset the state to trigger the animation again
    }
  }
}
