import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  public contacts: any = {};

  constructor(private toastr: ToastrService, private userService: UserService) { }

  ngOnInit() {
   
  }
contact( contacts: any ,contactForm:any){
  contacts.enabled = true;
  this.userService.contact(this.contacts).subscribe((response) => {
    if(response){
      console.log(response);
      contactForm.reset();
      this.toastr.success('Uspesno ste nas kontaktirali')

    }
  })

}

}
