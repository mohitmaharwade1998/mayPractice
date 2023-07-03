import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeModule } from './home/home.module';
import { ContactusModule } from './contactus/contactus.module';
import { AplicationlandingComponent } from './aplicationlanding/aplicationlanding.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
// import { CharactorsonlyDirective } from './charactorsonly.directive';
import { FormComponent } from './form/form.component';
import { SearchtextPipe } from './searchtext.pipe';
import { SearchPipe } from './search.pipe';
import { NumberonlyDirective } from './numberonly.directive';
import { CurruncyrupeePipe } from './curruncyrupee.pipe';
import { SharedModule } from './shared/shared.module';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { LifecycleParentComponent } from './lifecycle-parent/lifecycle-parent.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsOneComponent } from './subjects-one/subjects-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {  HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatabindingComponent,
    PagenotfoundComponent,
    AplicationlandingComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    // CharactorsonlyDirective,
    FormComponent,
    SearchtextPipe,
    SearchPipe,
    NumberonlyDirective,
    AppLandingComponent,
    LifecyclehookComponent,
    LifecycleParentComponent,
    SubjectsComponent,
    SubjectsOneComponent,
   
    // CurruncyrupeePipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //HomeModule,
    // ContactusModule,
    SharedModule,
    BrowserAnimationsModule,
  
// HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
