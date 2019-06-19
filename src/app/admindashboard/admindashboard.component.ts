import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from '../login-auth.service';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {



  







  settings = {
   
    
    actions: {
     
      add: false,
      edit: false,
      delete: false,
      custom: [
    
        {name: 'edit', title: this.sanitize.bypassSecurityTrustHtml('<button class="btn btn-info">Update</button>')},
        {name: 'delete', title: this.sanitize.bypassSecurityTrustHtml('<button class="btn"><i class="fa fa-trash"></i>Delete</button>')},
      ],
      position: "right"
       
    },
    // edit: {
    //   editButtonContent: '<i class="nb-help" title="Department info"></i>'
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash" title="Delete department"></i>'
    // },
    mode: "external",
    columns: {
      firstName: {
        title: 'Name'
      },
      lastName: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      },
      phoneNumber: {
        title: 'Phone'
      },
      role: {
        title: 'Role'
      },
      profilePicPath: {
        title: "Profile picture",
        type: 'html',
        valuePrepareFunction: (profilePicPath) => {
          if(profilePicPath){
            let img = this.sanitize.bypassSecurityTrustHtml(`<img class="dummy" *ngIf="profilePicPath" src="${profilePicPath}" style="width: 80px; height:80px;">`)

            return img
          }else{
            return "Slika ne postoji";
          }
         
        }
      },
      
    }
  };

 

  public loginuser: any = {};
  public users: any = [];
  

 
 
 


  constructor(private authService: LoginAuthService, private userService: UserService, private router: Router, private toastr: ToastrService, private sanitize: DomSanitizer) 
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

      custom(event, content){
        if(event.action == 'delete'){
         this.deleteUser(event.data.id)
        
        
        }else{
          this.router.navigate(['update', event.data.id])
        }
      }
     
       
       }

     
  


