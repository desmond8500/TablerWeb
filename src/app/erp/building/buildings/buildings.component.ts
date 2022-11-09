import { Component, Input, OnInit } from '@angular/core';
import { BuildingService } from 'src/app/services/building.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  @Input() projet_id: any
  buildings$: any

  constructor(
    private _building: BuildingService,
  ) { }

  ngOnInit(): void {
    this.getBuildings()
  }

  getBuildings(){
    this._building.getProjetBuilding({projet_id: this.projet_id}).subscribe({
      next: (res) => {
        console.log(res)
        this.buildings$ = res.data
      },
      error: (error) => console.log(error),
    })

  }

}
