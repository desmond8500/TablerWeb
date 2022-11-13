import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contact$: any

  constructor(
    private _contact: ContactService,
  ) {}

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    this._contact.getContacts().subscribe({
      next: (res: any) => {
        this.contact$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

}
