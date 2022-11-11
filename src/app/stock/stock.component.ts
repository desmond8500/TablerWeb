import { Component, OnInit } from '@angular/core';
import { Header } from '../interfaces/header';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  header: Header = {
    subtitle: 'Stock',
    title: 'Articles'
  }
  articles$:any

  constructor(
    private _article: ArticleService
  ) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    this._article.getArticles().subscribe({
      next: (res: any) => {
        console.log(res)
        this.articles$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

}
