import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactorsonlyDirective } from '../charactorsonly.directive';
import { CurruncyrupeePipe } from '../curruncyrupee.pipe';
import { NumberonyDirective } from '../angularforms/numberony.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharactorsonlyDirective,
    CurruncyrupeePipe,
    NumberonyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CharactorsonlyDirective,
    CurruncyrupeePipe,
    NumberonyDirective,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
