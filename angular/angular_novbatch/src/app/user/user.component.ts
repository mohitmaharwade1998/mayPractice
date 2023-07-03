import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  inputBoxValue:any
  inputBoxValue1:any
  inputBoxValue2:any
  inputBoxValue3: any;

 constructor(){}
  
 myFunction(value:any){
    this.inputBoxValue=value
  }

  myFunction1(value:any){
    this.inputBoxValue1=value
  }

  myFunction2(data:any){
    this.inputBoxValue2=data.value
  }
  
  blurEvent(){
    console.log('blur..');
    
  }

  myFunction3(data:any){
    this.inputBoxValue3=data.value
    
    console.log(data);
    console.log(data.target.value);
    
    
  }

myEvent(){
console.log('..');

}

checkboxEvent(){
  console.log('checkbox...');
  
}

checkboxEvent1(value:any){
  console.log(value);
  
  console.log('checkbox 2...',value.target.value);
  
}
checkboxEvent2(value:any){
  console.log('checkbox 2...',value.value);
  
}
}
