import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from 'src/app/interfaces/article';
import { Header } from 'src/app/interfaces/header';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  header: Header = {
    title: 'Articles',
    subtitle: 'Stock'
  }
  articles$: any
  constructor(
    private _article: ArticleService,

  ) { }

  ngOnInit(): void {
    this.getArticles()
  }

    // Articles

    getArticles(){
      this._article.getArticles().subscribe(
        res => {
          console.log(res)
          this.articles$ = res.data
        },
        err => {
          console.log(err)
        }
      )
    }
    addArticle(){

    }




}
