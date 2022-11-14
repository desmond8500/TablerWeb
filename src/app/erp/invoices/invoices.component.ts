import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProjetService } from 'src/app/services/projet.service';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  @Input() projet_id: any
  @ViewChild('devisModalID') devisModal: any
  @ViewChild('editDevisID') editDevisModal: any
  devis$: any
  selected: any

   invoiceForm: FormGroup = this.fb.group({
    id: new FormControl(null, [Validators.required]),
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
    private _invoice: InvoiceService,
    private route: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getDevis()
  }

  getDevis(){
    this._invoice.getInvoices().subscribe({
      next: (res: any) => {
        this.devis$ = res.data
      },
      error: (error:any) => console.log(error),
    })
  }

  showInvoice(invoice: any){
    this.modalService.open(this.devisModal)
    this.selected = invoice
  }

  gotoInvoice(){
    this.route.navigate(['erp/invoice', this.selected.id])
    this.modalService.dismissAll()
  }


  editInvoice(invoice: any){
    this.modalService.open(this.editDevisModal)

    this.invoiceForm.patchValue({
      id: invoice.id,
      projet_id: invoice.projet_id,
      reference: invoice.reference,
      status: invoice.status,
      description: invoice.description,
      client_name: invoice.client_name,
      client_tel: invoice.client_tel,
      client_address: invoice.client_address,
      discount: invoice.discount,
      tva: invoice.tva,
      brs: invoice.brs,
    })

  }

  updateInvoice(){
    this._invoice.updateInvoice(this.invoiceForm.value).subscribe({
      next: (res: any) => {
        console.log(res)
        // this.reloadEvent.emit()
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


