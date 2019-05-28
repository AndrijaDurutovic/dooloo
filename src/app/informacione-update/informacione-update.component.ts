import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-informacione-update',
  templateUrl: './informacione-update.component.html',
  styleUrls: ['./informacione-update.component.css']
})
export class InformacioneUpdateComponent implements OnInit {

  public id= this.route.snapshot.params.id
  public objekat

  public subjects= {

      course_name: null,
      semester: null,
      espb: null,
      is_mandatory:null
  }

  constructor(private router: Router, private subject: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getByUpdateId()
  }
  updateRow(){
    this.subject.updateRow(this.id, this.subjects).subscribe(subject => 
      {
    this.router.navigate(['informacione-tehnologije'])
      }, err => {
        console.log(err)
      })
  
  }

getByUpdateId(){
  this.subject.getUpdateById(this.id).subscribe(res =>{
    console.log(res)
    this.subjects= res
  }, err => {
    console.log(err)
  })

}

}
