import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss']
})
export class InvoiceTableComponent implements OnInit {
  @Input() devis:any
  constructor() { }

  ngOnInit(): void {
  }

}
