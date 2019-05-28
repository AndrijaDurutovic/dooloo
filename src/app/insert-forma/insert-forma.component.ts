import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-insert-forma',
  templateUrl: './insert-forma.component.html',
  styleUrls: ['./insert-forma.component.css']
})
export class InsertFormaComponent implements OnInit {

  constructor(private subject: UserService) { }
  subjects= {
    course_name: null,
    semester:null,
    espb:null,
    is_mandatory: null
    }

  ngOnInit() {
  }

insert(){
  this.subject.insert(this.subjects).subscribe(res => console.log(res), err => console.log(err))


}

}
