import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './achats/achat/achat.component';
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
  { path: 'achat/:id', component: AchatComponent },
  { path: 'marques', component: BrandsComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class StockRoutingModule { }
