import { Component, OnInit } from '@angular/core';
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
  header: Header = { title: "Rapport", subtitle: "ERP" }
  breadcrumbs: Breadcrumb[] = [
    { name: "ERP", route: '/erp/clients' },
    { name: "Clients", route: '/erp/clients' },
    { name: "Client_name", route: '/erp/client/' },
    { name: "Projet_name", route: "/erp/projet/" },
  ]
  report_id: any

  constructor(
    private route: ActivatedRoute,
    private _report: ReportService,
  ) { }

  ngOnInit(): void {
    this.report_id = this.route.snapshot.paramMap.get('id');
    this.getReport()
  }

  // Report
  report$?: any
  getReport(){
    this._report.getReport(this.report_id).subscribe({
      next: (res: any) => {
        this.report$ = res.data
        this.getSections()
        this.breadcrumbs[2].name = this.report$.client_name
        this.breadcrumbs[2].route = "/erp/client/"+ this.report$.client_id
        this.breadcrumbs[3].name = this.report$.projet_name
        this.breadcrumbs[3].route = "/erp/projet/"+ this.report$.projet_id
      },
      error: (error: any) => console.log(error),
    })
  }

  // Section
  section$: any
  getSections(){
    this._report.getReportSections({report_id: this.report_id}).subscribe({
      next: (res: any) => {
        this.section$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

}
