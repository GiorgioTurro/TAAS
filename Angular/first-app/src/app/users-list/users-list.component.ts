import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/_services/crud.service';
import { OauthService } from '../_services/oauth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;
  auth : any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  public isLoggedIn = false;

  constructor(private crudService: CRUDService, private authService : OauthService) { }

  ngOnInit(): void {
    //this.retrieveUsers;
  }

  /**retrieveUsers() {
    this.crudService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveAuth() {
    this.authService.goToLogin();
       .subscribe(
        data => {
          this.auth = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }

  logout(){
    this.authService.logout();
  }

  rUsers(){
    this.retrieveUsers();
  }

  rAuth(){
    this.retrieveAuth();

  }

  rLogout(){
    this.logout();
  }

  try(){
    this.authService.try();
  }**/

}
