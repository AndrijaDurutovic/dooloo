import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from './login-auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spring-security';
  userName
  public currentStatus: any;

  constructor(private authService: LoginAuthService, private router: Router){
      this.currentStatus = this.authService.getStatus().subscribe(currentStatus => {
        this.currentStatus = currentStatus;
      })
  }
  ngOnInit(){
this.userName=JSON.parse(localStorage.getItem('currentUser')).user.firstName
console.log(this.userName)
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);

  }
 
}
