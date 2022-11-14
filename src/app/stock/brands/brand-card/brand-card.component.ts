import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent implements OnInit {
  @Input() brand: any
  @Output() reloadEvent = new EventEmitter()
  @ViewChild('editBrandID') editModal:any
   brandForm: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    logo: new FormControl(),
    description: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _brand: BrandService,
    ) {}

  ngOnInit(): void {
  }

  editBrand(){
    this.brandForm.patchValue({
      id: this.brand?.id,
      name: this.brand?.name,
      description: this.brand?.description,
    })
    console.log(this.brandForm.value);

    this.modalService.open(this.editModal)
  }
  updateBrand(){
    let form: Brand = this.brandForm.value
    form.id = this.brand.id

    this._brand.updateBrand(form).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.brand = form
      },
      error: (error) => console.log(error),
    })
  }
  deleteBrand(){
    this._brand.deleteBrand({id: this.brand.id}).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.reloadEvent.emit()
        // this.route.navigate(['erp/brands'])
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
