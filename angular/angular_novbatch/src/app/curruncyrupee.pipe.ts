import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curruncyrupee'
})
export class CurruncyrupeePipe implements PipeTransform {

  transform(value: number): any {
   console.log('value',value);;
   
   if(!value){
    return null;
   }
   
   return value * 80;
   
  }

}
