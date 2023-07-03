import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SharedModule } from '../shared/shared.module';

import { AlphanumericDirective } from './alphanumeric.directive';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ReactiveformComponent,
    TemplatedrivenComponent,
    AlphanumericDirective,
    LoginsuccessComponent,
    // NumberonyDirective,
  ],
  imports: [
    CommonModule,
    AngularformsRoutingModule,
    SharedModule,
    HttpClientModule
    
  ]
})
export class AngularformsModule { }
