import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplicationlanding',
  templateUrl: './aplicationlanding.component.html',
  styleUrls: ['./aplicationlanding.component.scss']
})
export class AplicationlandingComponent {


  constructor(private router:Router){}
  redirect(){
    this.router.navigateByUrl('/admin/admin')
    }
  
    testcontact(){
      this.router.navigateByUrl('/test/testContact')
    }
  
  
}
