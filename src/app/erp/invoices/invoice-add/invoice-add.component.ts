import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Invoice } from 'src/app/interfaces/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss']
})
export class InvoiceAddComponent implements OnInit {
  @Input() projet_id: any
  @Output() reloadEvent = new EventEmitter()

  invoiceForm: FormGroup = this.fb.group({
    projet_id: new FormControl(null, [Validators.required]),
    reference: new FormControl(null, [Validators.required]),
    status: new FormControl(1, [Validators.required]),
    description: new FormControl(),
    client_name: new FormControl(),
    client_tel: new FormControl(),
    client_address: new FormControl(),
    discount: new FormControl(0),
    tva: new FormControl(0),
    brs: new FormControl(0),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _invoice: InvoiceService,
  ) { }

  ngOnInit(): void {
  }

  addInvoice(){
    let form: Invoice = this.invoiceForm.value
    form.projet_id = this.projet_id
    form.reference = "D-"
    console.log(form);

    this._invoice.addInvoice(form).subscribe({
      next: (res: any) => {
        console.log(res)
        this.reloadEvent.emit()
        this.modalService.dismissAll()
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
