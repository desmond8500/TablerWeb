import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from 'src/app/interfaces/header';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  header: Header = {
    subtitle: 'ERP',
    title: 'Devis'
  }

  breadcrumbs: any = [
    { name: "ERP", route: '/erp/clients' },
    { name: "Clients", route: '/erp/clients' },
    { name: "Client", route: '/erp/client' },
    { name: "Projet", route: '/erp/projet' },
    { name: "Devis", route: '/erp/invoice' },
  ]

  invoice_id:any
  constructor(
    private route: ActivatedRoute,
    private _invoice: InvoiceService,
  ) { }

  ngOnInit(): void {
    this.invoice_id = this.route.snapshot.paramMap.get('id');
    this.getInvoice()

  }
  // Invoice
  invoice$: any
  getInvoice(){
    this._invoice.getInvoice({id: this.invoice_id}).subscribe({
      next: (res: any) => {
        this.invoice$ = res.data
        this.getRows(res.data.id)
      },
      error: (error: any) => console.log(error),
    })
  }
  getRows(id: any){
    this._invoice.getInvoiceRows({invoice_id: id}).subscribe({
      next: (res: any) => {

      },
      error: (error: any) => console.log(error),
    })
  }

}
