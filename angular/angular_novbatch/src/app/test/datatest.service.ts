import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class DatatestService {

  constructor(public dataService:DataService) { }

  car=this.dataService.carname;

  title='my web page';
  
  test(){
    return this.title;
  }
}
