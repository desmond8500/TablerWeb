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
    private modalService: NgbModal,
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


  closeResult = '';

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: result`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: reason`;
    }
  }
}
