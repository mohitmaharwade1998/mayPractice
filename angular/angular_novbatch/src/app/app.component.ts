import { Component } from '@angular/core'; //import section : where we add 
import { Router } from '@angular/router';

@Component({  //component directive section:metadata about componant
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //main component class:where we write 
  title = 'angular_novbatch';
  mysurname: string = 'maharwade';
  mysurname1!: string;


  constructor(private router:Router) {
    console.log('inside constructor');
    // this.test()
    // this.test2()
  }

  test() {
    this.mysurname1 = 'mohit'
    console.log(this.mysurname1);
    console.log(',,,,');


  }

  test2() {
    // this.test()
    console.log('.......');

  }

  test3() {
    // this.test2()
    this.mysurname='mmm'
    console.log(this.mysurname);
    
  }
  // redirect(){
  // this.router.navigateByUrl('/admin/admin')
  // }

  // testcontact(){
  //   this.router.navigateByUrl('/test/testContact')
  // }












}
