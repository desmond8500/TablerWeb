import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { Header } from 'src/app/interfaces/header';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  header: Header = {
    subtitle: 'Stock',
    title: 'Articles'
  }
  breadcrumbs: Breadcrumb[] = [
    { name: "Articles", route: "/stock/articles" }
  ]

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
        this.articles$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

}
