import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import{Router} from '@angular/router'
import {LoginAuthService} from '../login-auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading = false;

  public user: any = {};

  

  constructor(private userService: UserService, private router: Router, private authService: LoginAuthService, private toastr: ToastrService) {
    this.authService.isLoggedIn();
   }

  ngOnInit() {
  }
    loginUser(user: any){ 
      this.loading=true;
      this.userService.loginUser(user).subscribe(response =>{
        if(response){
          if(response.token){
            localStorage.setItem('currentUser', JSON.stringify(response));
            if(response.user.role === 'ADMIN'){
              this.loading=false;
              this.router.navigate(['/admindashboard']);
              

              
          
            }else{
              
              this.router.navigate(['/userdashboard']);
            }
          }
          
        }
      }, 
      err => { 
        this.loading=false;
      this.toastr.warning(err.error.message);
      })

    }

  }