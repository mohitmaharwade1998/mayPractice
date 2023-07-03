import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {


  @Input() cityName : any;
  cityfromService: any;
  @Input() car:any


  @Output() childData = new EventEmitter<any> 

  
  constructor(private dataService:DataService){}

  //from service
  // ngOnInit(){
  //   this.cityfromService = this.dataService.cityNameService
  // }

  data(){
    this.cityfromService = this.dataService.cityNameService
  }



  favfruit (data:any){
  console.log(data.target.value);
  let value =data.target.value
  this.childData.emit(value)
  
}





  ///lifecycle hook : 1- ngOnChange , 2-ngOnInit ,3 -ngDoCheck 4-ng AfterContentInit
  ///   5-ngAfterContentChecked 6- ngAfterViewInit 7-ngAfterViewChecked 8-ngOnDestroy.



  ngOnInit() {
    console.log('ngonnit');
  }

  ngOnChanges(){
    console.log('ngOnChange ');
    
  }


}
