import { Component, OnInit, Input } from '@angular/core';
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
  devis$: any

  constructor(
    private modalService: NgbModal,
    private _projet: ProjetService,
    private _invoice: InvoiceService,
    private _data: DataService,
  ) {}

  ngOnInit(): void {
    this.getDevis()
  }

  getDevis(){
    this._invoice.getInvoices().subscribe({
      next: (res: any) => {
        console.log(res),
        this.devis$ = res.data
      },
      error: (error:any) => console.log(error),
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


