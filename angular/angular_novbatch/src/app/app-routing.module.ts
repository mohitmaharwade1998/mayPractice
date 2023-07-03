import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { AplicationlandingComponent } from './aplicationlanding/aplicationlanding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormComponent } from './form/form.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { LifecycleParentComponent } from './lifecycle-parent/lifecycle-parent.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'databinding',component:DatabindingComponent},
  // {path:'home_home',component:HomeComponent},
  // {path:'home_landing',component:LandingComponent},
 {path:'aplicationlanding',component:AplicationlandingComponent},
 {path:'directive',component:DirectiveComponent},
 {path:'form',component:FormComponent},
 {path:'applanding',component:AppLandingComponent},
 {path:'lifecyclehook' ,component:LifecyclehookComponent},
 {path:'lifecycleParent',component:LifecycleParentComponent},
 {path:'subject',component:SubjectsComponent},


  //lazy loading
  {path:'home',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path:'aboutus',loadChildren:()=>import('./aboutus/aboutus.module').then(m=>m.AboutusModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'test',loadChildren:()=>import('./test/test.module').then(m=>m.TestModule)},
  {path:'anularforms',loadChildren:()=>import('./angularforms/angularforms.module').then(a=>a.AngularformsModule)},

  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
