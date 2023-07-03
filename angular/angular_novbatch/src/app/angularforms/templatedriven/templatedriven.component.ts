import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {

  // ownerUrl = "http://localhost:3000/owner";
  endPoint="owner"
  getOwnerData:any
  constructor(private dataService:DataService  , private router:Router,
    private commonApiCall:CommonApiCallService,private http : HttpClient){

  }

 
  submitdata(values:any){
    console.log('formvalue',values);
    console.log(values.fullname);
    
    this.dataService.formname=values.fullname;
    //post API call

    //redirect
    this.router.navigateByUrl('/anularforms/loginsuccess')
  }

  getownerData(){
 this.commonApiCall.getApiCall(this.endPoint).subscribe(res=>{
  this.getOwnerData=res;
  console.log("getOwerData",this.getOwnerData);
  
 })
  }
}
