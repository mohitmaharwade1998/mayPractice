import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {

  constructor(private elementRef : ElementRef) { }

  @HostListener ('input',["$event"])

  inputbox(){
    let inputboxInitialvalue = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = inputboxInitialvalue.replace(/[^0-9]*/g,'')
  }

}
