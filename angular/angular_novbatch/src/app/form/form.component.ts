import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

title:string='my web fisrT Weg';
DOBdate = '10-28-2022'
          //mm-dd-yyyy
 DOBdate2='05/22/1998';

 today= new Date();

 todaydate: any;

 inputBoxValue:any;
 
 employee=[
 {name:'raj',age:40,salary:40000},
 {name:'ravi',age:70,salary:50000},
 {name:'shankar',age:30,salary:87000}
 ]
 amount:any;


 ngOnInit(){
 this.dateFormate()
 }
 dateFormate(){
  console.log(this.today.toLocaleDateString());

  let day = this.today.getDate();
  let month = this.today.getMonth();
  let year = this.today.getFullYear();
  console.log(day);
  console.log(month);
  console.log(year);
  
  console.log(day + '/'+ month + '/'+year);
  
  this.todaydate = (day + '/'+ month + '/'+year);
  
  
  
 }

}