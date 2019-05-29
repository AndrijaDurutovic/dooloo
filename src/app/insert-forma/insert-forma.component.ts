import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-forma',
  templateUrl: './insert-forma.component.html',
  styleUrls: ['./insert-forma.component.css']
})
export class InsertFormaComponent implements OnInit {

  constructor(private subject: UserService, private router: Router) { }
  subjects= {
    course_name: null,
    semester:null,
    espb:null,
    is_mandatory: null
    }

  ngOnInit() {
  }

insert(){
  this.subject.insert(this.subjects).subscribe(res => {
    console.log()
    this.router.navigate(['informacione-tehnologije'])
  }, err => console.log(err))
  



}

}
