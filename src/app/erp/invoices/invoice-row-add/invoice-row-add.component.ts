import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-row-add',
  templateUrl: './invoice-row-add.component.html',
  styleUrls: ['./invoice-row-add.component.scss']
})
export class InvoiceRowAddComponent implements OnInit {
  @Input() invoice_id: any
  @Output() reloadEvent = new EventEmitter()

  articleForm: FormGroup = this.fb.group({
    invoice_id: new FormControl(null, [Validators.required]),
    article_id: new FormControl(null, [Validators.required]),
    reference: new FormControl(1, [Validators.required]),
    quantity: new FormControl(),
    coef: new FormControl(),
    priority: new FormControl(),
    section_id: new FormControl(),
    name: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _invoice: InvoiceService,
  ) { }

  ngOnInit(): void {
  }

  addInvoice(){
    // let form: Invoice = this.invoiceForm.value
    // form.projet_id = this.projet_id
    // form.reference = "D-"
    console.log(this.articleForm.value);

    // this._invoice.addInvoiceRow(this.articleForm.value).subscribe({
    //   next: (res: any) => {
    //     console.log(res)
    //     this.reloadEvent.emit()
    //     this.modalService.dismissAll()
    //   },
    //   error: (error: any) => console.log(error),
    // })
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
