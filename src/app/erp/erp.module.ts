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

@NgModule({
  declarations: [
     ClientsComponent,
    ProjetsComponent,
    InvoicesComponent,
    ClientAddComponent,
    HeaderComponent,
    ClientComponent,
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
