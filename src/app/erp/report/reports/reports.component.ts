import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  @Input() projet_id: any
  constructor() { }

  ngOnInit(): void {
  }

}
