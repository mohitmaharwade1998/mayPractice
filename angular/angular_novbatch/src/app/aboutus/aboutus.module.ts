import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutuslandingComponent } from './aboutuslanding/aboutuslanding.component';
import { AboutusdetailsComponent } from './aboutusdetails/aboutusdetails.component';
import { SharedModule } from '../shared/shared.module';

console.log('aboutus module...');


@NgModule({
  declarations: [
    AboutuslandingComponent,
    AboutusdetailsComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    SharedModule
  ]
})
export class AboutusModule { }
