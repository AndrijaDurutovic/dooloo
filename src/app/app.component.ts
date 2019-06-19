import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from './login-auth.service';
import{Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showActions
  title = 'spring-security';
  userName
  public currentStatus: any;
  profilePicPath: any;

  constructor(private authService: LoginAuthService, private router: Router, private toastr: ToastrService){
      this.currentStatus = this.authService.getStatus().subscribe(currentStatus => {
        this.currentStatus = currentStatus;
      })
  }
  ngOnInit(){
this.userName=JSON.parse(localStorage.getItem('currentUser')).user.firstName
console.log(this.userName)

this.showActions = JSON.parse(localStorage.getItem('currentUser')).user.role
console.log(this.showActions)

  }
  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
    this.toastr.success('Uspesno ste se izlogovali')

  }
 
}
