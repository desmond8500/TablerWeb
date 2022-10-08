import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full'},
  { path: 'clients', component: ClientsComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'invoices', component: InvoicesComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }
