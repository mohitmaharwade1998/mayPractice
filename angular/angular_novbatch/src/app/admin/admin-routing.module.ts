import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminParentComponent } from './admin-parent/admin-parent.component';

const routes: Routes = [
  { path: 'adminchilde', component: AdminComponent },
  {path:'adminparent',component:AdminParentComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
