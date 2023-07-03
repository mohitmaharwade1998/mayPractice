import { Component } from '@angular/core';
import { DatatestService } from '../datatest.service';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.scss']
})
export class TestHomeComponent {
  car: any;

  constructor(private datatestService:DatatestService){}

  ngOnInit(){
    this.car=this.datatestService.car
  }
}
