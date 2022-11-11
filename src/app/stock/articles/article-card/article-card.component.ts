import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { BrandService } from 'src/app/services/brand.service';
import { DataService } from 'src/app/services/data.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: any
  @Output() reloadEvent = new EventEmitter()
  @ViewChild('editAchatID') editModal:any

  priority$:any
  brand$:any
  provider$:any

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
    private _provider: ProviderService,
    private _brand: BrandService,
    private _data: DataService,
  ) {}

  ngOnInit(): void {
    this.getBrands()
    this.getProviders()
    this.getPriorities()
  }

  editArticle(){
    this.articleForm.patchValue({
      brand_id: this.article.brand_id,
      provider_id: this.article.provider_id,
      designation: this.article.designation,
      reference: this.article.reference,
      quantity: this.article.quantity,
      priority: this.article.priority,
      price: this.article.price,
      image: this.article.image,
      description: this.article.description,
    })

    console.log(this.articleForm.value);

    this.modalService.open(this.editModal)
  }
  updateArticle(){
    let form: Article = this.articleForm.value
    form.id = this.article.id

    this._article.updateArticle(form).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.article = form
      },
      error: (error) => console.log(error),
    })
  }
  deleteArticle(){
    let form: Article = this.articleForm.value
    this._article.deleteArticle({id: this.article.id}).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
         this.reloadEvent.emit()
        // this.route.navigate(['erp/brands'])
      },
      error: (error) => console.log(error),
    })
  }

  getPriorities(){
    this._data.getStatus().subscribe({
      next: (res: any) => {
        console.log(res)
        this.priority$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }
  getBrands(){
    this._brand.getBrands().subscribe({
      next: (res: any) => {
        console.log(res)
        this.brand$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }
  getProviders(){
    this._provider.getProviders().subscribe({
      next: (res: any) => {
        console.log(res)
        this.provider$ = res.data
      },
      error: (error: any) => console.log(error),
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
