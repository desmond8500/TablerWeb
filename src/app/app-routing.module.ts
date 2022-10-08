import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErpModule } from './erp/erp.module';
import { IndexComponent } from './pages/index/index.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReglagesComponent } from './pages/reglages/reglages.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'reglages', component: ReglagesComponent },
  { path: 'erp', loadChildren:() => import('./erp/erp.component').then(m => ErpModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
