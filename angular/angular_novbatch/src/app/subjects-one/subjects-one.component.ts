import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subjects-one',
  templateUrl: './subjects-one.component.html',
  styleUrls: ['./subjects-one.component.scss']
})
export class SubjectsOneComponent {

  subdata:any;
  
  constructor(private dataService:DataService){}

  ngOnInit(){
   this.dataService.subjectData.subscribe(value =>{
    this.subdata = value ;
   })
  }

}
