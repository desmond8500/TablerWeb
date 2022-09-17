import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plannings',
  templateUrl: './plannings.component.html',
  styleUrls: ['./plannings.component.scss']
})
export class PlanningsComponent implements OnInit {
  name: any = {
    name: 'Hotel',
    duree: '100',
    debut: '12/05/2022',
    fin: '12/05/2022',
    start: '12/05/2022',
    end: '12/05/2022',
    avancement: '50%',
  }
  plannings: any = [
    { type:1, name: 'Hotel', duree: '100', debut: '12/05/2022', fin: '12/05/2022', start: '12/05/2022', end: '12/05/2022', avancement: '50%', },
    { type:2, name: 'Hotel', duree: '100', debut: '12/05/2022', fin: '12/05/2022', start: '12/05/2022', end: '12/05/2022', avancement: '50%', },
    { type:3, name: 'Hotel', duree: '100', debut: '12/05/2022', fin: '12/05/2022', start: '12/05/2022', end: '12/05/2022', avancement: '50%', },
    { type:0, name: 'Hotel', duree: '100', debut: '12/05/2022', fin: '12/05/2022', start: '12/05/2022', end: '12/05/2022', avancement: '50%', },
    { type:0, name: 'Hotel', duree: '100', debut: '12/05/2022', fin: '12/05/2022', start: '12/05/2022', end: '12/05/2022', avancement: '50%', },
    { type:0, name: 'Hotel', duree: '100', debut: '12/05/2022', fin: '12/05/2022', start: '12/05/2022', end: '12/05/2022', avancement: '50%', },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
