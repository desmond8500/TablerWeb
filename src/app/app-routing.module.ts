import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReglagesComponent } from './pages/reglages/reglages.component';

const routes: Routes = [
  { path: '', redirectTo: 'reglages', pathMatch: 'full'},
  { path: 'reglages', component: ReglagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
