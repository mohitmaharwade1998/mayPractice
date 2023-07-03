import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder : FormBuilder) {

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
    console.log(this.studentDataForm.value);

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
}
