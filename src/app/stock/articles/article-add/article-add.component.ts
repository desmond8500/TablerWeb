import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {
  @Output() reloadEvent = new EventEmitter()

  articleForm: FormGroup = this.fb.group({
    brand_id: new FormControl(),
    provider_id: new FormControl(),
    designation: new FormControl(null, [Validators.required]),
    reference: new FormControl(null, [Validators.required]),
    quantity: new FormControl(),
    priority: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    description: new FormControl(null, [Validators.required]),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _article: ArticleService,
    private _privider: ArticleService,
    private _brand: ArticleService,
  ) { }

  ngOnInit(): void {
  }

  test(){

  }

   add_Article(){
    let form: any = this.articleForm.value
    console.log(form);

    this._article.addArticle(form).subscribe({
      next: (res) => {
        console.log(res)
        this.reloadEvent.emit()
        this.modalService.dismissAll()
      },
      error: (error) => console.log(error),
    })
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
