import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminrouteRoutingModule } from './adminroute-routing.module';
import { AdminDashboardComponent } from 'src/app/admin/admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from 'src/app/admin/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from 'src/app/admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from 'src/app/admin/admin-sidebar/admin-sidebar.component';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminrouteRoutingModule
  ],
  exports:[ AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,]
})
export class AdminrouteModule { }
