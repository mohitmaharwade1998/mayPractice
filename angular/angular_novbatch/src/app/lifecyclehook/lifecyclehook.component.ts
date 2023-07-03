import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.scss']
})
export class LifecyclehookComponent {


  @Input() parentdata:any

  constructor(){
    console.log('constructor child...');
    
  }
//lifecycle hooks: 1.ngOnInit 2. ngOnChanges , 3.ngDoCheck , 4.ngAfterContentInit, 5.ngAfterContentChecked  
//6.ngAfterViewInit , 7.ngAfterViewChecked, 8.ngOnDestroy.

ngOnInit(){
console.log(' ngOnInit child');
 }

 ngOnChanges(){
  console.log('onOnchanges child');
  
 }



 ngDoCheck(){
  console.log(' ngDocheck child');
  
 }



 ngAfterContentInit(){
  console.log('child  ngAfterContentInit');
  
 }

 ngAfterContentChecked(){
  console.log('child  ngAfterContentChecked');
  
 }
 

 ngAfterViewInit(){
  console.log('child  ngAfterViewInit');
  
 }

 ngAfterViewChecked(){
  console.log('child  ngAfterViewChecked');
  
 }

 ngOnDestroy(){
  console.log('child  ngOnDestroy');
  
 }

}
