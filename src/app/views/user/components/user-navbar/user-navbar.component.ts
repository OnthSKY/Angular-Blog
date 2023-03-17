import { Component } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  imagePath = "../../../../../assets/imgaes/sky.png"

  isHomePage(){
    return location.pathname=="/"
  }
}
