import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

const routes: Routes = [
  {path:'templateform',component:TemplatedrivenComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:"loginsuccess",component:LoginsuccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularformsRoutingModule { }
