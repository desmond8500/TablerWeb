import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Building } from 'src/app/interfaces/building';
import { BuildingService } from 'src/app/services/building.service';
import { StageService } from 'src/app/services/stage.service';
import { __read } from 'tslib';

@Component({
  selector: 'app-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.scss']
})
export class BuildingCardComponent implements OnInit {
  @Input() building: any
  @Input() editButton: boolean = false
  @ViewChild('editBuildingID') editBuildingModal: any
  @Output() reloadEvent = new EventEmitter()

  buildingForm: FormGroup = this.fb.group({
    projet_id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  })

  stages$: any

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _building: BuildingService,
    private _stage: StageService,
  ) { }

  ngOnInit(): void {
    this.getStages()
  }

  // Building

  editBuilding(){
    this.buildingForm.patchValue({
      name: this.building?.name,
      description: this.building?.description,
    })

    this.modalService.open(this.editBuildingModal)
  }
  updateBuilding(){
    let form: Building = this.buildingForm.value
    form.projet_id = this.building?.projet_id
    form.id = this.building?.id

    this._building.updateBuilding(form).subscribe({
      next: () => {
        this.modalService.dismissAll()
        this.reloadEvent.emit(1)
      },
      error: (error) => console.log(error),
    })

  }
  deleteBuilding(){
    alert('Delete Action')
  }

  // stages

  getStages(){
    this._stage.getBuildingStages({building_id: this.building.id}).subscribe({
      next: (res) => {
        this.stages$ = res.data
      },
      error: (error) => console.log(error),
    })
  }

}
