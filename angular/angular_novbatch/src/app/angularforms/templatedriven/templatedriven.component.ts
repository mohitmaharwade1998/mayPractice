import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {

  constructor(private dataService:DataService  , private router:Router){

  }

 
  submitdata(values:any){
    console.log('formvalue',values);
    console.log(values.fullname);
    
    this.dataService.formname=values.fullname;
    //post API call

    //redirect
    this.router.navigateByUrl('/anularforms/loginsuccess')
  }
}
