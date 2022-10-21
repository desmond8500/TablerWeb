import { Component, Input, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  @Input() projet_id: any
  reports$: any
  constructor( private _report: ReportService) {  }

  ngOnInit(): void {
    this.getReports()
  }

  getReports(){
    this._report.getReports().subscribe({
      next: (res) => {
        this.reports$ = res.data
      },
      error: (error) => console.log(error),
    })
  }
}
