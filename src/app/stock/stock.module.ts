import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';

import { ArticlesComponent } from '../stock/articles/articles/articles.component';
import { ArticleCardComponent } from '../stock/articles/article-card/article-card.component';
import { ArticleAddComponent } from '../stock/articles/article-add/article-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StockComponent,
    ArticlesComponent,
    ArticleCardComponent,
    ArticleAddComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    ReactiveFormsModule
  ]
})
export class StockModule { }
