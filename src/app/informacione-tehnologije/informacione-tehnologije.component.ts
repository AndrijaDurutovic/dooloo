import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-informacione-tehnologije',
  templateUrl: './informacione-tehnologije.component.html',
  styleUrls: ['./informacione-tehnologije.component.css']
})
export class InformacioneTehnologijeComponent implements OnInit {

    public objekat: any = [];


  constructor(private subject: UserService, private router: Router, private toastr: ToastrService) { }

  

  ngOnInit() {

    this.getInsert()
  }

  getInsert(){

    this.subject.getInsert().subscribe(res => this.objekat=res, err => console.log(err))
    
  }
 
 deleteRow(id){
  this.subject.deleteRow(id).subscribe(res => {
    console.log(res) 
    this.getInsert()
    
  }
    
  )
   
 }

updateRow(id){
  this.router.navigate(['informacione-update', id])
}


}
