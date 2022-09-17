import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { IndexComponent } from './index/index.component';
import { PlanningsComponent } from './plannings/plannings.component';

@NgModule({
  declarations: [
    ClientsComponent,
    IndexComponent,
    PlanningsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
