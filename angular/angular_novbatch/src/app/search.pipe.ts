import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfObject:any, inputBoxValue:any): any {
    
    if(!arrayOfObject){
      return null
    }
    if(!inputBoxValue){
      return arrayOfObject;
    }

    inputBoxValue=inputBoxValue.toLowerCase();
   return arrayOfObject.filter((item:any)=>{
     return JSON.stringify(item).toLocaleLowerCase().includes(inputBoxValue)
    })
    
  }

}
