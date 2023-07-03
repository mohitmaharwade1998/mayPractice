import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lifecycle-parent',
  templateUrl: './lifecycle-parent.component.html',
  styleUrls: ['./lifecycle-parent.component.scss']
})
export class LifecycleParentComponent {

  test: any

  constructor(private datservice:DataService) {
    console.log('constructor parent');

  }

  ngOnInit() {
    console.log(' ngOnInit parent');
  }

  ngOnChanges() {
    console.log('ngOnchanges parent');

  }

  ngDoCheck() {
    console.log(' ngDocheck parent');

  }


  setdDataSubject(){
  this.datservice.subjectData.next('mohit')
  }
}
