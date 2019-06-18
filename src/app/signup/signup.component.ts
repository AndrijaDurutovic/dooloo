import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoginAuthService } from '../login-auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public loading = false;
  selectedFile: File 
  public slika: any 

  public user: any = {
    firstName: null,
    lastName: null,
    email:null,
    phone:null,
    role:null,
  profilePicPath: null
  };

  constructor(private http: HttpClient,private userService: UserService, private authService: LoginAuthService, private toastr: ToastrService) { 
    this.authService.isLoggedIn();
  }

  ngOnInit() {
  }
  saveUser(user:any, userForm: any,){
    this.loading = true;
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
    err => { 
      this.loading=false;
    this.toastr.warning(err.error.message);
    }
    
  }
  onFileSelected(event){
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://us-central1-imageupload-2fc33.cloudfunctions.net/uploadFile', fd )
    .subscribe(res=>{
      console.log('Url slike:' ,res);
      this.user.profilePicPath=res
      this.user.profilePicPath=this.user.profilePicPath.message

    });
  }



}
