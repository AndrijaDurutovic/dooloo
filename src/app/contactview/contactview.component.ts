import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactview',
  templateUrl: './contactview.component.html',
  styleUrls: ['./contactview.component.css']
})
export class ContactviewComponent implements OnInit {
  public contacts: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllContacts(this.contacts).subscribe(contacts =>
      {
        this.contacts = contacts ;
      })
  }

}
