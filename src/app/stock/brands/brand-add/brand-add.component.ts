import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {
 @Output() reloadEvent = new EventEmitter()
  constructor(
    private modalService: NgbModal,
    private _brand: BrandService,
    private fb: FormBuilder,
    ) {}

  brandForm: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    logo: new FormControl(),
    description: new FormControl(),
  })

  ngOnInit(): void {
  }

  addBrand(){
    let form: any = this.brandForm.value
    console.log(form);

    this._brand.addBrand(form).subscribe({
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
