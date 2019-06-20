import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from '../login-auth.service';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
selector: 'app-admindashboard',
templateUrl: './admindashboard.component.html',
styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

buttons =[
{text: 'Edit',class:'btn-secondary',icon:'fa fa-edit'}, 
{text:'Delete',class:'btn-danger', icon:'fa fa-trash', iconPosition:'right'}
];

public loginuser: any = {};
public users: any = [];
profilePicPath

constructor(private sanitizer: DomSanitizer,private authService: LoginAuthService, private userService: UserService, private router: Router, private toastr: ToastrService) 
{ 
this.authService.isLoggedIn();
this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
}
transform(value: any, args?: any): any {
return this.sanitizer.bypassSecurityTrustHtml(value);
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

firstButtonClicked(e:any){
  this.updateUser(e.data.id)
console.log(e)
}
secondButtonClicked(e:any){
this.deleteUser(e.data.id)

}
}