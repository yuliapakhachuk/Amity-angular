import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRowIsPressed]',
  host: {
    '(dblclick)': 'tooglePressedMode()',
  },
})
export class RowIsPressedDirective {
  
  constructor( private element: ElementRef) { }
  @HostListener('dblclick') tooglePressedMode($event: any): void {
    this.element.nativeElement.classList.add("pressed");
  }
}


