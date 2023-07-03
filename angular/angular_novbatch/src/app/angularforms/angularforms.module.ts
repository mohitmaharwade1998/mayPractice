import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SharedModule } from '../shared/shared.module';
import { NumberonyDirective } from './numberony.directive';
import { AlphanumericDirective } from './alphanumeric.directive';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';


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
  ]
})
export class AngularformsModule { }
