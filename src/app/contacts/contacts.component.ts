import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../breadcrumb';
import { Header } from '../interfaces/header';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  header: Header = {
    subtitle: 'Contacts',
    title: 'Contacts'
  }
  breadcrumbs: Breadcrumb[] = [
    { name: "Contacts", route: "/stock/articles" }
  ]
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
