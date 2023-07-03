import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data={
    name:'mohit',
    age:20,
    mobile:9823540907
  }
  carname='bmw';

  fruit!:string;


  studentName='Raj';

  emp={
    name:'mohit',
    age:20,
    mobile:9823540907,
  }
  formname: any;

  cityNameService:any;

  subjectData = new Subject<any>();

  constructor() { }

    //alternate way two get and set data
  getStudentName(){
  return this.studentName;
  }

  setStudentName(value:any){
  this.studentName=value;
  }


  multiplication(num1:number,num2:number){
  return num1 * num2
  }
}
