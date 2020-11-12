import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
Password: string ='';
Username: string ='';
Email: string ='';
Name: string ='';
Surname: string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
