import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent},
  {path:'dashboard',component:AdminDashboardComponent},
  {path:'**',component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminrouteRoutingModule { }
