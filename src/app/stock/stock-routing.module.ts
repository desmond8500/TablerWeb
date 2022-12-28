import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatsComponent } from './achats/achats.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { BrandsComponent } from './brands/brands.component';
import { ProvidersComponent } from './providers/providers.component';
import { StockComponent } from './stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'stock', pathMatch: 'full'},
  { path: 'stock', component: StockComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: StockComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'achats', component: AchatsComponent },
  { path: 'marques', component: BrandsComponent },
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
