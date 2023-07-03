import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 res:any
  constructor(private dataService:DataService){}

  multiplication(){
    this.res=  this.dataService.multiplication(2,30);
    console.log('res',this.res);
    
    }
}
