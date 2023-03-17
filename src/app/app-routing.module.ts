import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './views/admin/pages/admin-home-page/admin-home-page.component';
import { AdminLayoutPagesComponent } from './views/admin/pages/admin-layout-pages/admin-layout-pages.component';
import { CustomerPageComponent } from './views/admin/pages/customer-page/customer-page.component';
import { DashbordPageComponent } from './views/admin/pages/dashbord-page/dashbord-page.component';
import { ProductPageComponent } from './views/admin/pages/product-page/product-page.component';
import { UserRegisterPageComponent } from './views/admin/pages/user-register-page/user-register-page.component';
import { AboutPageComponent } from './views/user/pages/about-page/about-page.component';
import { ContactPageComponent } from './views/user/pages/contact-page/contact-page.component';
import { UserHomePageComponent } from './views/user/pages/user-home-page/user-home-page.component';
import { UserLayoutPageComponent } from './views/user/pages/user-layout-page/user-layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutPageComponent,
    children: [
      { path: '', component: UserHomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutPagesComponent,
    children: [
      { path: '', component: AdminHomePageComponent },
      { path: 'dashboard', component: DashbordPageComponent },
      { path: 'products', component: ProductPageComponent },
      { path: 'customers', component: CustomerPageComponent },
      { path: 'register', component: UserRegisterPageComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
