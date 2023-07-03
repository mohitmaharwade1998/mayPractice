import { Component } from '@angular/core';
import { DatatestService } from '../datatest.service';

@Component({
  selector: 'app-test-contact',
  templateUrl: './test-contact.component.html',
  styleUrls: ['./test-contact.component.scss']
})
export class TestContactComponent {


  constructor(private datatestService:DatatestService){}

  webTitle:any
  //fetching function from service
  // getData(){
  //  this.webTitle = this.datatestService.test()
  // }

  ngOnInit(){
    this.webTitle = this.datatestService.test()
  }
}
