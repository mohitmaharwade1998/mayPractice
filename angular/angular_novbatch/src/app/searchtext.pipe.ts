import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtext'
})
export class SearchtextPipe implements PipeTransform {

  transform(arrayOfObject: any, inputBoxSearchVlaue: any): any {
   
    // if(!arrayOfObject){
    //   return null
    // }

    if(!inputBoxSearchVlaue){
      return arrayOfObject;
    }

    // console.log(arrayOfObject);
    // console.log(inputBoxSearchVlaue);

    inputBoxSearchVlaue = inputBoxSearchVlaue.toLowerCase();
   return arrayOfObject.filter((item:any)=>{
    return JSON.stringify(item).toLowerCase().includes(inputBoxSearchVlaue)
    })
     }
}
