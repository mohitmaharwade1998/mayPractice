import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../angularforms/common-api-call.service';

@Component({
  selector: 'app-aplicationlanding',
  templateUrl: './aplicationlanding.component.html',
  styleUrls: ['./aplicationlanding.component.scss']
})
export class AplicationlandingComponent {
  constructor(private commonApiCall:CommonApiCallService){

  }

  deleteById(){
    this.commonApiCall.deleteApiCall('user',10).subscribe(res=>{})

  }
  
}
