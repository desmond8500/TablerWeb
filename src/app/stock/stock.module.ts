import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { StockComponent } from './stock.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ArticleCardComponent } from './articles/article-card/article-card.component';
import { ArticleAddComponent } from './articles/article-add/article-add.component';
import { StockRoutingModule } from './stock-routing.module';
import { BrandsComponent } from './brands/brands.component';
import { BrandCardComponent } from './brands/brand-card/brand-card.component';
import { BrandAddComponent } from './brands/brand-add/brand-add.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderCardComponent } from './providers/provider-card/provider-card.component';
import { ProviderAddComponent } from './providers/provider-add/provider-add.component';
import { AchatAddComponent } from './achats/achat-add/achat-add.component';
import { AchatCardComponent } from './achats/achat-card/achat-card.component';
import { AchatsComponent } from './achats/achats.component';

@NgModule({
  declarations: [
    StockComponent,
    ArticlesComponent,
    ArticleCardComponent,
    ArticleAddComponent,
    BrandsComponent,
    BrandCardComponent,
    BrandAddComponent,
    ProvidersComponent,
    ProviderCardComponent,
    ProviderAddComponent,
    AchatAddComponent,
    AchatCardComponent,
    AchatsComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    ReactiveFormsModule
  ]
})
export class StockModule { }
