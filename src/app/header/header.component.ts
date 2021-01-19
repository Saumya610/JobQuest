import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // bgImage="https://img.freepik.com/free-vector/office-background-design_52683-44168.jpg?size=626&ext=jpg";
  imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5AR1xAj1obBveZmd3FaniHpa_LTbTYzyPw&usqp=CAU";
  constructor(private ro:Router) { }

  ngOnInit(): void {
  }
getimage(){
  this.ro.navigate(['/home','home']);
}
  jobs()
  {
    
  }
  internships(){
  
  }
  more(){
  
  }
  
  aboutus(){
    this.ro.navigate(['/about-us','aboutus']);
  }
  contactus(){
  
  }
  login(){
    this.ro.navigate(['/log-in','login']);
  }
  signin(){
    this.ro.navigate(['/sign-in','signin']);
  }
  image()
  {
    this.ro.navigate(['/home','home']);
  }
}
