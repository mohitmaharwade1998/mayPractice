import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {

  para: any;
  
  para1='l'
  //Note:property para = undefine/false/'' = false ; 
  //property para = value:any data type or true = true

  // show: any = false;
  show: any = 'n';

  item=[10,20,96,55,78];

  student=[
    {
      name:'mmm',
      age:25,
      hobby:'cricket'
    },
    {
      name:'mohit',
      age:55,
      hobby:'batminton'
    },
    {
      name:'harshi',
      age:98,
      hobby:'hocky'
    }
  ];
  showStudentdata='m';

  img = 'C:/Users/user/Desktop/new practice 31-5-23/mayChanakya/mayPractice/angular/angular_novbatch/src/assets/mopic.jpeg.png'


  color='pink'
  styleProperty='main2';
  stylePropertyNew=false;
  //stylePropertyNew=false/'mm'/212;

  multipleStyle='mohit'
  //stylePropertyNew='' //empty string b rha to as a value lega nd undefined and false me false jayega
 
  inlinecss='orange';
  headingproperty:any=8;  ///false/'mm'/20

  constructor(){

 }

    hideDiv() {
    this.show = false;
  }

  showDiv() {
    this.show = true;
  }

  hidShowDiv(value:boolean) {
    this.show = value;
  }

  toggle1() {
    this.show = !this.show; //!undefined or !false  = true
  }

  switchcolor(value:any){
    this.color=value
  }

  setclass():any{
    return 'main'
  }
}
