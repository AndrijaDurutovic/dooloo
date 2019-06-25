import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  selectedFile: File 

  public id;
  public user: any = {
    firstName: null,
    lastName: null,
    email:null,
    phone:null,
    role:null,
  profilePicPath: null
  };
public token 
  

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private http: HttpClient) { 

  }

  ngOnInit() {

    this.token = JSON.parse(localStorage.getItem('currentUser')).token;

   

  this.id=this.route.snapshot.params.id
  console.log(this.id);


    this.getUserById();
  }
update(){
  this.userService.updateUser(this.id, this.user).subscribe(user =>
    {
  this.router.navigate(['admindashboard'])
    }, err => {
      console.log(err);
    })

}

getUserById(){
  this.userService.getUserById(this.token, this.id).subscribe(user =>
    {
    this.user=user;
    }, err => {
      console.log(err);
    })

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
updateUser(id){
  this.router.navigate(['update', id])
  }
    

}
