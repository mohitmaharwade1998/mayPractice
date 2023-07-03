import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactorsonlyDirective } from '../charactorsonly.directive';
import { CurruncyrupeePipe } from '../curruncyrupee.pipe';
import { NumberonyDirective } from '../angularforms/numberony.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
  ],
  exports:[
    CharactorsonlyDirective,
    CurruncyrupeePipe,
    NumberonyDirective,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
  ]
})
export class SharedModule { }
