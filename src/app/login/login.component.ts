import { Component, OnInit } from '@angular/core';
import {Login} from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
lmn:any;
l:Login;
types:string[]=['Job Seeker','Job Provider'];

  constructor() 
  {
    this.l=new Login();
   }

  submit()
{
  
}
  ngOnInit(): void {
  }

}
