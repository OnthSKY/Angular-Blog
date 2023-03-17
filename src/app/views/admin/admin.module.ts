import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutPagesComponent } from './pages/admin-layout-pages/admin-layout-pages.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { DashbordPageComponent } from './pages/dashbord-page/dashbord-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { UserRegisterPageComponent } from './pages/user-register-page/user-register-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminLayoutPagesComponent,
    AdminSidebarComponent,
    DashbordPageComponent,
    ProductPageComponent,
    CustomerPageComponent,
    AdminHomePageComponent,
    UserRegisterPageComponent,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
