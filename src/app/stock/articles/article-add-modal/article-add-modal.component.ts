import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-add-modal',
  templateUrl: './article-add-modal.component.html',
  styleUrls: ['./article-add-modal.component.scss']
})
export class ArticleAddModalComponent implements OnInit {
  @Output() articleAddEvent = new EventEmitter<any>()
  @ViewChild('editArticle') editArticleModal: any

  article: any
  priorities: any
  brands: any

  linkForm: FormGroup = this.fb.group({
    link: new FormControl(),
  })

  articleForm: FormGroup = this.fb.group({
    name: new FormControl(),
    reference: new FormControl(),
    priority: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    brand_id: new FormControl(),
    provider_id: new FormControl(),
    photo: new FormControl(),
    // name: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _article: ArticleService,
  ) { }


  ngOnInit(): void {
    this.priorities = this._article.getPriorities()
  }

  getArticle(){
    this._article.article_url({lien: this.linkForm.value.link}).subscribe(
      res => {
        // console.log(res)
        this.articleForm.patchValue({
          name: res.data.title,
          reference: res.data.reference,
          price: res.data.price,
          quantity: res.data.quantity,
          description: res.data.description,
          brand_id: res.data.brand_id,
          priority_id: res.data.priority_id,
          photo: res.data.image,
        })
      },
      err => {
        // console.log(err)
      }
    )
  }

  addArticle(){
    let form = {
      name:         this.articleForm.value.name,
      reference:    this.articleForm.value.reference,
      price:        this.articleForm.value.price,
      quantity:     this.articleForm.value.quantity,
      description:  this.articleForm.value.description,
      brand_id:     this.articleForm.value.brand_id,
      priority_id:  this.articleForm.value.priority_id,
      photo:        this.articleForm.value.photo,
      lien:         this.linkForm.value.link,
    }

    this._article.addArticle(form).subscribe(
      res => {
        console.log(res)
        this.articleAddEvent.emit(1)
        this.modalService.dismissAll()
      },
      err => {
        console.log(err)
      }
    )
  }

  convert(){
    this.articleForm.patchValue({
      price: this.articleForm.value.price*655
    })
  }

  editArticle(){

  }

  // Modal
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
