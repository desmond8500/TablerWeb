import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactsComponent } from './contacts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactAddComponent,
    ContactCardComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactsModule { }
