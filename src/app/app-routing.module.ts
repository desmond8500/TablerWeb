import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReglagesComponent } from './pages/reglages/reglages.component';
import { ArticlesComponent } from './stock/articles/articles.component';
import { BrandsComponent } from './stock/brands/brands.component';
import { ProvidersComponent } from './stock/providers/providers.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'marques', component: ArticlesComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
