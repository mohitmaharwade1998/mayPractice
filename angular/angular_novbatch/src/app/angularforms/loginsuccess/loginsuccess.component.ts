import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';
import {HttpClient} from "@angular/common/http"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent {
name: any;
  userData: any;
  url = " http://localhost:3000/user";
  hotelDetailsEndPoint="hotelDetails"
  suscribeData: any;
  hotelDetails: any;
  matForm!:FormGroup;

constructor(private dataService:DataService , private commonApiCall:CommonApiCallService,
  private http : HttpClient, private formBuilder:FormBuilder){

}
ngOnInit(){
  //getcall
// this.commonApiCall.getUser().subscribe(response=>{
//   this.userData = response;
//   console.log("response",response);
  
// })

//or

// this.http.get(this.url).subscribe(res=>{
//   this.userData=res;
//   console.log('userdata',this.userData);
//   console.log(this.userData[1].name);
  
  
// })




// this.commonApiCall.getUser(this.url).subscribe(response=>{
//   this.userData = response;
//   console.log("response",response);
  
// });


//for hoteldetails

this.suscribeData=this.commonApiCall.getApiCall(this.hotelDetailsEndPoint).subscribe(res=>{
  this.hotelDetails=res;
  console.log(this.hotelDetails);


  //Form

 

  

 

    })
    this.matFormDef()

  }
  matFormDef(){
    this.matForm=this.formBuilder.group({
  name:['',[Validators.required]],
  password:['',[Validators.required]]
})


  this.name=this.dataService.formname;

}

ngOnDestroy(){
  this.suscribeData.unsuscribe() //to avoid memery leakage problem ,we should have to unsuscribe

  // console.log('fghj');
  
}
visibility(){
  console.log('mm');
  
}


}
