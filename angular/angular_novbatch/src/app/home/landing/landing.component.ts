import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  carname!: string;
  data_name: any
  age1: any
  fruit: any
  studentname:any;
  mobNo!: number;
  mobNo2!: number;


  constructor( private  dataService : DataService ){

  }

  ngOnInit(){
   this.carname= this.dataService.carname;
   this.data_name=this.dataService.data;

   this.dataService.fruit='orange'
  }

  //get data from server by function
  age(){
    this.age1=this.dataService.data;

}
getdata(){
  this.fruit=this.dataService.fruit;

  console.log('this.fruits',this.fruit);
}

setdata(){
  this.dataService.fruit='apple'
}

// another way to set and get data from service

getStudentName(){
this.studentname =  this.dataService.getStudentName()
console.log('studentname',this.studentname);

}


setStudentName(){
  let name='harshi'
  this.dataService.setStudentName(name)
}


multiplication(){
let res = this.dataService.multiplication(20,30);
console.log('res',res);

}

getdata1(){
this.mobNo=this.dataService.emp.mobile;

this.dataService.emp.mobile=78555222;
this.mobNo2=this.dataService.emp.mobile

}

}
