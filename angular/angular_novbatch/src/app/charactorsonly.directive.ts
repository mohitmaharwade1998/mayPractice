import { Directive, ElementRef, HostListener } from '@angular/core';

console.log('inside charactorsonly');

@Directive({
  selector: '[appCharactorsonly]'
})
export class CharactorsonlyDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener ('input',["$event"])

  onInputBoxChange(){
   
    var inputBoxInitialValue = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = inputBoxInitialValue.replace(/[^a-zA-Z]*/g,'')
  }
}
