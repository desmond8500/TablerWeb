import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stage } from 'src/app/interfaces/stage';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-stage-add',
  templateUrl: './stage-add.component.html',
  styleUrls: ['./stage-add.component.scss']
})
export class StageAddComponent implements OnInit {
  @Input() building_id: any
  @Output() reloadEvent = new EventEmitter()

  stageForm: FormGroup = this.fb.group({
    building_id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    order: new FormControl(),
    description: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _stage: StageService,
  ) { }

  ngOnInit(): void {
  }

  addStage(){
    let form: Stage = this.stageForm.value
    form.building_id = this.building_id
    console.log(form);

    this._stage.addStage(form).subscribe({
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
