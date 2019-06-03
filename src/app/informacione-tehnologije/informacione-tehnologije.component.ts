import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-informacione-tehnologije',
  templateUrl: './informacione-tehnologije.component.html',
  styleUrls: ['./informacione-tehnologije.component.css']
})
export class InformacioneTehnologijeComponent implements OnInit {

    public objekat: any = [];
    closeResult: string;

      public id //id za modal i delete button, ubacujem ga u deleteRow funkciju i vezan je za id_course
  loginuser: any;
  constructor(private authService: LoginAuthService, private subject: UserService, private router: Router, private toastr: ToastrService, private modalService: NgbModal) { 
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  

  ngOnInit() {

    this.getInsert()
  }

  getInsert(){

    this.subject.getInsert().subscribe(res => this.objekat=res, err => console.log(err))
    
  }
 
 deleteRow(){
  this.subject.deleteRow(this.id).subscribe(res => {
    console.log(res) 
    this.getInsert()
    
  }
    
  )
   
 }

updateRow(id){
  this.router.navigate(['informacione-update', id])
}

open(content, id) {
  this.id=id;
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}


}
