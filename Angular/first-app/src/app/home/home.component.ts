import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ShowService } from '../_services/show.service';
import { TableModule } from 'primeng/table';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
show: Boolean = false;
  constructor(public showService: ShowService, private authService: SocialAuthService, private router: Router, public loginService: LoginService) {
    console.log("Constructor");
    if(loginService.loggedIn == false){
      console.log("False");
      this.router.navigate(['/login']);
    }
   }

  ngOnInit(): void {

  }

  signOut(): void {
    console.log("logout");
    this.authService.signOut();
    this.router.navigate(['/login']);
  }

}
