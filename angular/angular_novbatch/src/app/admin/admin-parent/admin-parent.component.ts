import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.scss']
})
export class AdminParentComponent {
parentCityName: any;

fruits=['apple','kiwi','orange','mango'];
cars=['audi','bmw','swift','axcent']
  dataFromChild1: any;

  parentTable=[
    {
      name:'mohit',
      age:22,
      mobno:77777
    },
    {
      name:'rohit',
      age:72,
      mobno:8884542
    },
    {
      name:'surya',
      age:62,
      mobno:79665
    }
  ]


constructor(private dataService:DataService){}

parentdata(event:any){
// console.log(event.target.value);
this.parentCityName = event.target.value;

this.dataService.cityNameService=event.target.value
}

datafromChild(value:any){
  this.dataFromChild1 = value;
}



}
