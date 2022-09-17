import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main.component';
import { PlanningsComponent } from './plannings/plannings.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: '', component: MainComponent,
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'plannings', component: PlanningsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
