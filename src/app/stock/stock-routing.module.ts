import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../index/header/header.component';
import { StockComponent } from './stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'stock', pathMatch: 'full'},
  { path: 'stock', component: StockComponent },
  { path: 'articles', component: StockComponent },
  { path: 'article/:id', component: StockComponent },
  { path: 'providers', component: StockComponent },
  { path: 'achats', component: StockComponent },
  { path: 'marques', component: StockComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // HeaderComponent,
  ],
  exports: [RouterModule]
})
export class StockRoutingModule { }
