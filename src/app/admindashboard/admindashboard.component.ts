import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from '../login-auth.service';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
 

  public loginuser: any = {};
  public users: any = [];
  

 
 
 


  constructor(private authService: LoginAuthService, private userService: UserService, private router: Router, private toastr: ToastrService) 
  { 
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAllUsers(this.loginuser.token).subscribe(users =>
    {
      this.users= users;
    })
  }
      deleteUser(users){
       this.userService.deleteUser(users).subscribe(res=>{
        console.log('Deleted');

    this.userService.getAllUsers(this.loginuser.token).subscribe(users =>
      {
        this.users= users;
      })
        this.toastr.success('Uspesno izbrisano');
       })
      
      }
      updateUser(id){
        this.router.navigate(['update', id])
      }

     
       
       }

     
  


