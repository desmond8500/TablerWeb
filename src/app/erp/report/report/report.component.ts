import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { Header } from 'src/app/interfaces/header';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  header: Header = {
    title: "Rapport",
    subtitle: "ERP"
  }
  breadcrumbs: Breadcrumb = {
    name: "TestBed",
    route: "erp/clients"
  }
  report_id: any
  report$?: any
  section$: any

  constructor(
    private route: ActivatedRoute,
    private _report: ReportService,
  ) { }

  ngOnInit(): void {
    this.report_id = this.route.snapshot.paramMap.get('id');
    this.getReport()
  }

  // Report
  getReport(){
    this._report.getReport(this.report_id).subscribe({
      next: (res: any) => {
        this.report$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

}
