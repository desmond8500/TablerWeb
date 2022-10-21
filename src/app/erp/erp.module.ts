import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientAddComponent } from './clients/client-add/client-add.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjetsComponent } from './projets/projets.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './clients/client/client.component';
import { NgbAccordionModule, NgbDatepickerModule, NgbNavModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientCardComponent } from './clients/client-card/client-card.component';
import { AddProjetComponent } from './projets/add-projet/add-projet.component';
import { ProjetCardComponent } from './projets/projet-card/projet-card.component';
import { ProjetComponent } from './projets/projet/projet.component';

@NgModule({
  declarations: [
     ClientsComponent,
    ProjetsComponent,
    InvoicesComponent,
    ClientAddComponent,
    HeaderComponent,
    ClientComponent,
    ClientCardComponent,
    AddProjetComponent,
    ProjetCardComponent,
    ProjetComponent,
  ],
  imports: [
    CommonModule,
    ErpRoutingModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbDatepickerModule,
    // NgxPaginationModule,
  ],
})
export class ErpModule { }
