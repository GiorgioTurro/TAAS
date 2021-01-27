import { Injectable } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService) {
    this.authService.authState.subscribe((user) => {
      console.log("Change");
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.loggedIn);
    });
   }
}
