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
  invoice_id:any
  constructor(
    private route: ActivatedRoute,
    private _invoice: InvoiceService,
  ) { }

  ngOnInit(): void {
    this.invoice_id = this.route.snapshot.paramMap.get('id');
  }

}
