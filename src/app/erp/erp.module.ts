import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientAddComponent } from './clients/client-add/client-add.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjetsComponent } from './projets/projets.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ClientComponent } from './clients/client/client.component';
import { NgbAccordionModule, NgbDatepickerModule, NgbNavModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientCardComponent } from './clients/client-card/client-card.component';
import { AddProjetComponent } from './projets/add-projet/add-projet.component';
import { ProjetCardComponent } from './projets/projet-card/projet-card.component';
import { ProjetComponent } from './projets/projet/projet.component';
import { ReportsComponent } from './report/reports/reports.component';
import { ReportComponent } from './report/report/report.component';
import { ReportCardComponent } from './report/report-card/report-card.component';
import { ProjetResumeComponent } from './projets/projet-resume/projet-resume.component';
import { ReportAddComponent } from './report/report-add/report-add.component';
import { BuildingsComponent } from './building/buildings/buildings.component';
import { BuildingAddComponent } from './building/building-add/building-add.component';
import { BuildingCardComponent } from './building/building-card/building-card.component';
import { StageAddComponent } from './building/stage-add/stage-add.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { StageCardComponent } from './building/stage-card/stage-card.component';
import { RoomCardComponent } from './building/room-card/room-card.component';
import { RoomAddComponent } from './building/room-add/room-add.component';
import { RoomArticleAddComponent } from './building/room-article-add/room-article-add.component';
import { InvoiceAddComponent } from './invoices/invoice-add/invoice-add.component';
import { StageGenerateComponent } from './building/stage-generate/stage-generate.component';
import { RoomGenerateComponent } from './building/room-generate/room-generate.component';
import { InvoiceComponent } from './invoices/invoice/invoice.component';
import { StatusPipe } from './status.pipe';
import { InvoiceRowAddComponent } from './invoices/invoice-row-add/invoice-row-add.component';
import { SectionCardComponent } from './report/section-card/section-card.component';
import { SectionAddComponent } from './report/section-add/section-add.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';
import { SharedModule } from '../shared/shared.module';
import { InvoiceTableComponent } from './invoices/invoice-table/invoice-table.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ProjetsComponent,
    InvoicesComponent,
    ClientAddComponent,
    ClientComponent,
    ClientCardComponent,
    AddProjetComponent,
    ProjetCardComponent,
    ProjetComponent,
    ReportsComponent,
    ReportComponent,
    ReportCardComponent,
    ProjetResumeComponent,
    ReportAddComponent,
    BuildingsComponent,
    BuildingAddComponent,
    BuildingCardComponent,
    StageAddComponent,
    StageCardComponent,
    RoomCardComponent,
    RoomAddComponent,
    RoomArticleAddComponent,
    InvoiceAddComponent,
    StageGenerateComponent,
    RoomGenerateComponent,
    InvoiceComponent,
    StatusPipe,
    InvoiceRowAddComponent,
    SectionCardComponent,
    SectionAddComponent,
    DeleteModalComponent,
    InvoiceTableComponent
  ],
  imports: [
    CommonModule,
    ErpRoutingModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbDatepickerModule,
    TablerIconsModule.pick(TablerIcons),
    SharedModule
  ],
})
export class ErpModule { }
