import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {

  studentDataForm!: FormGroup;
  showPassword: boolean = false;
  cities=['Mumbai','Pune','Nagpur','Satara']
  password: any;
  showConfirmPassword: boolean=false;
  confirmPassword: any;
  isMatched: boolean = false;
  data3:any

  constructor(private formBuilder : FormBuilder,
    private commonApiCall:CommonApiCallService) {

  }

  ngOnInit() {
    this.studentForm();
  }

  studentForm() {
    this.studentDataForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      tAndc: [true, [Validators.requiredTrue]],
      lastname: ['', [Validators.required, Validators.pattern("[a-zA-Z]*$")]],
      title : ['',[Validators.required,this.wordValidator]],
      city : ['',[]],
      password : [''],
      confirmpassword : [''],

    } )
  }

  submit() {
    console.log("formData",this.studentDataForm.value);
    console.log("mobileNo",this.studentDataForm.value.mobileNo);

    //post Api
    let endPoint="user";
    this.commonApiCall.postApiCall(endPoint,this.studentDataForm.value).subscribe()
    

    //patch

//     let mobileNumber=this.studentDataForm.value.mobileNo;
   
//     this.commonApiCall.patchApiCall('admin',{mobNo:mobileNumber},2).subscribe({})
//  }

 //or

 let data={
  mobNo:this.studentDataForm.value.mobileNo,
  name:this.studentDataForm.value.name
 }

 this.commonApiCall.patchApiCall('admin',data,2).subscribe({})
}


  showPasswordFun() {
    this.showPassword = !this.showPassword
  }

  showConfirmPasswordFun(){
    this.showConfirmPassword = !this.showConfirmPassword
  }

 

  passwordValidation(inputPassword:any){
  // console.log(inputPassword.target.value);

  this.password = inputPassword.target.value;

  if(this.password ==this.confirmPassword){
    this.isMatched = false;
  }else{
    this.isMatched=true;
  }
  }

  confimPasswordValidation(conPass:any){
    this.confirmPassword = conPass.target.value;
    if(this.password ==this.confirmPassword){
      this.isMatched = false;
    }else{
      this.isMatched=true;
    }
  }





  wordValidator(inputValue:any){

    console.log('....',inputValue.value);
     
    let inputData = inputValue.value?.toLowerCase();
    let isInclude = inputData?.includes('title');
    
    return isInclude ? {isValid:true} : null;
 
     
   }

   data(data:any){
   console.log("event",data.target.value);
   
   }

   data1(data:any){
    console.log("event",data);
    
    }

    data4(){
      console.log(this.data3);
      
    }

    putApi(){
      let data={
        mobNo:this.studentDataForm.value.mobileNo,
        name:this.studentDataForm.value.name,
        password:this.studentDataForm.value.password, 
        confirmpassword:this.studentDataForm.value.confirmpassword
       }
      
      this.commonApiCall.putApi('admin',data,2).subscribe(res=>{})
    }
}
