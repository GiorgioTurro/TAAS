import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OauthService } from '../_services/oauth.service'
import { TokenService } from '../_services/token.service';
import { TokenDto } from '../models/token-dto';
import { LoginService } from '../_services/login.service'
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username: string ="";
  Password: string ="";
  socialUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private oauthService: OauthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null && this.tokenService.getToken() != null);
      }
    );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);
        this.socialUser = data;
        const tokenGoogle = new TokenDto(this.socialUser.idToken);
        console.log(tokenGoogle);
        this.oauthService.google(tokenGoogle).subscribe(
          (res: any) => {
            console.log("res.value")
            console.log(res.token);
            this.tokenService.setToken(res.token);
            this.isLogged = true;
            this.router.navigate(['/home']);
            console.log(res);
          },
          err => {
            console.log("errore");
            this.logOut();
          }
        );
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {


        this.socialUser = data;
        const tokenFace = new TokenDto(this.socialUser.authToken);
        this.oauthService.facebook(tokenFace).subscribe(
          (res:any) => {
            console.log("res.value")
            console.log(res.token);
            this.tokenService.setToken(res.token);
            this.isLogged = true;
            this.router.navigate(['/home']);
          },
          err => {
            console.log(err);
            this.logOut();
          }
        );
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }



  logOut(): void {
    this.authService.signOut().then(
      data => {
        this.tokenService.logOut();
        this.isLogged = false;
      }
    )
  }

}
