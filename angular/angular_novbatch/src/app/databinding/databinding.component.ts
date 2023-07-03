import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {

  data=[1,2,3,44,'klkk'];
  emp={
    name:'mmmm',
   age:24
  }

  name='mmm'

  disableBox=false;
  no=50;

  name2:any='mohit mmm';

  array=[21,5,87,555]
  arraytemCopy:any=[]

  constructor(){
    
  }

  ngOnInit(){
    this.arraytest()
  }

  getvalue(){
    // return "raj" ;
    return this.disableBox
  }

  ng(){
    return this.name2
  }

  arraytest(){
    this.array.forEach(ele =>{
    this.arraytemCopy.push(ele);
    })
  }
}
