import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stage } from 'src/app/interfaces/stage';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-stage-generate',
  templateUrl: './stage-generate.component.html',
  styleUrls: ['./stage-generate.component.scss']
})
export class StageGenerateComponent implements OnInit {
  @Input() building_id: any
  @Output() reloadEvent = new EventEmitter()

  generateForm: FormGroup = this.fb.group({
    soussol: new FormControl(0),
    rdc: new FormControl(0),
    mezzanine: new FormControl(0),
    etage: new FormControl(0),
    terrasse: new FormControl(0),
  })
  stageForm: FormGroup = this.fb.group({
    building_id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    // order: new FormControl(),
    description: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _stage: StageService,
  ) { }

  ngOnInit(): void {
  }

  generate(){
    let stage: Stage = {
      building_id : this.building_id,
      name: 'RDC',
    }

    if(this.generateForm.value.soussol){
      if (this.generateForm.value.soussol>1) {
        for (let index = 1; index <= this.generateForm.value.soussol; index++) {
          stage.name = 'Sous Sol '+index
          this.addStage(stage)
        }
      } else {
        stage.name = 'Sous Sol'
        this.addStage(stage)
      }
    }

    stage.name = 'RDC'
    this.addStage(stage)
    if(this.generateForm.value.mezzanine){
      stage.name = 'Mezzanine'
      this.addStage(stage)
    }
    if(this.generateForm.value.etage){
      for (let index = 1; index <= this.generateForm.value.etage; index++) {
        stage.name = 'Etage '+index
        this.addStage(stage)
      }
    }
    if(this.generateForm.value.terrasse){
      stage.name = 'Terrasse'
      this.addStage(stage)
    }

  }

  addStage(stage: Stage){
    stage.building_id = this.building_id

    this._stage.addStage(stage).subscribe({
      next: (res) => {
        console.log(res)
        this.reloadEvent.emit()
        this.modalService.dismissAll()
      },
      error: (error) => console.log(error),
    })
  }

  closeResult = '';

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: result`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: reason`;
    }
  }


}
