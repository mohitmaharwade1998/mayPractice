import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  constructor(private elementRef:ElementRef) { 
    console.log('insdie directive numbesonly');
  }

  @HostListener('input',['$event'])

onInputBoxChange(){
  console.log('inside numberonly directive');
  
  // console.log(event.target.value);

  
 var inputBoxinitialValue = this.elementRef.nativeElement.value;
 this.elementRef.nativeElement.value = inputBoxinitialValue.replace(/[^a-zA-Z0-9-, ]*/g,'')

}

}
