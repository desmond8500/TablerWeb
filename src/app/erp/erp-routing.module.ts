import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './clients/client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { InvoiceComponent } from './invoices/invoice/invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProjetComponent } from './projets/projet/projet.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full'},
  { path: 'clients', component: ClientsComponent },
  { path: 'client/:id', component: ClientComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'projet/:id', component: ProjetComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoice/:id', component: InvoiceComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }
