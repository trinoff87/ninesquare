import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCountclicks]'
})
export class CountclicksDirective {
  counter = 0;
  constructor() { }

  @HostBinding('style.opacity') opacity = .1; // used to change a dom element from the directive
  @HostListener('click', ['$event.target'])

  onClick(ref) {
    console.log('a', ref, 'Number of clicks:', this.counter++);
    this.opacity += .1;
  }

}
