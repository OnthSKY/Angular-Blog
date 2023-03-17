import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutPageComponent } from './pages/user-layout-page/user-layout-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';



@NgModule({
  declarations: [
    UserLayoutPageComponent,
    UserNavbarComponent,
    UserHomePageComponent,
    ContactPageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class UserModule { }
