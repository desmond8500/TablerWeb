import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/services/article.service';
import { BrandService } from 'src/app/services/brand.service';
import { DataService } from 'src/app/services/data.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {
  @Output() reloadEvent = new EventEmitter()
  priority$:any
  brand$:any
  provider$:any

  articleForm: FormGroup = this.fb.group({
    brand_id: new FormControl(),
    provider_id: new FormControl(),
    designation: new FormControl(null, [Validators.required]),
    reference: new FormControl(null, [Validators.required]),
    quantity: new FormControl(0),
    priority: new FormControl(1),
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
  ) { }

  ngOnInit(): void {
    this.getBrands()
    this.getProviders()
    this.getPriorities()
  }

  add_Article(){
    let form: any = this.articleForm.value

    this._article.addArticle(form).subscribe({
      next: (res) => {
        this.reloadEvent.emit()
        this.modalService.dismissAll()
      },
      error: (error) => console.log(error),
    })
  }

  getPriorities(){
    this._data.getStatus().subscribe({
      next: (res: any) => {
        this.priority$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }
  getBrands(){
    this._brand.getBrands().subscribe({
      next: (res: any) => {
        this.brand$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }
  getProviders(){
    this._provider.getProviders().subscribe({
      next: (res: any) => {
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
