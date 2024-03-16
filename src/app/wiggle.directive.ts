import {Directive, ElementRef, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[appWiggle]',
  standalone: true
})
export class WiggleDirective {
  private el = inject(ElementRef);

  @HostListener('click') onClick() {
    this.el.nativeElement.classList.remove("wiggle");
    this.el.nativeElement.offsetWidth;
    this.el.nativeElement.classList.add("wiggle");
  }
}
