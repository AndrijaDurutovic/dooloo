import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public id;
  public user={
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    role: null
  }
public token 
  

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { 

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

    

}
