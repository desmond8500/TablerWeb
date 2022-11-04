import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stage } from 'src/app/interfaces/stage';
import { RoomService } from 'src/app/services/room.service';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-stage-card',
  templateUrl: './stage-card.component.html',
  styleUrls: ['./stage-card.component.scss']
})
export class StageCardComponent implements OnInit {
  @Input() stage: any
  @Output() reloadEvent = new EventEmitter()
  @ViewChild('editStageID') editStageModal: any
  @ViewChild('stageID') stageModal: any

  rooms$: any

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
    private _room: RoomService,
  ) { }

  ngOnInit(): void {
    this.getRooms()
  }

  getRooms(){
    this._room.getRooms().subscribe({
      next: (res: any) => {
        console.log(res)
        this.rooms$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

  showStage(){
    this.modalService.open(this.stageModal)
  }

  editStage(){
    this.stageForm.patchValue({
      building_id: this.stage.building_id,
      name: this.stage.name,
      description: this.stage.description,
    })
    this.modalService.open(this.editStageModal)
  }
  updateStage(){
    let form: Stage = this.stageForm.value
    form.id = this.stage.id
    console.log(form);

    this._stage.updateStage(form).subscribe({
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
