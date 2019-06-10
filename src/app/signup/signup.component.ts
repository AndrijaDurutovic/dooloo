import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoginAuthService } from '../login-auth.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public user: any = {};

  constructor(private userService: UserService, private authService: LoginAuthService, private toastr: ToastrService) { 
    this.authService.isLoggedIn();
  }

  ngOnInit() {
  }
  saveUser(user:any, userForm: any){
    
    user.enabled = true;
    this.userService.saveUser(user).subscribe((response) => {
      if(response){
        
        console.log(response);
        userForm.reset();
        this.toastr.success('Uspesno ste se registrovali',
        'Dobrodosli')
      }
    },  err => {
      
      this.toastr.success('Uspesno ste se registrovali',
    'Dobrodosli')}
   
    )
  }


}
