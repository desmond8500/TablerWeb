import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
