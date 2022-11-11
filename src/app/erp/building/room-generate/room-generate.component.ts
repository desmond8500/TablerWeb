import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Room } from 'src/app/interfaces/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-generate',
  templateUrl: './room-generate.component.html',
  styleUrls: ['./room-generate.component.scss']
})
export class RoomGenerateComponent implements OnInit {

  @Input() stage: any
  @Output() reloadEvent = new EventEmitter()

  statut: boolean = true

  generateForm: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    from: new FormControl(),
    to: new FormControl(),
  })

  roomForm: FormGroup = this.fb.group({
    stage_id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _room: RoomService,
  ) { }

  ngOnInit(): void {
  }

  generate(){
    for (let index = this.generateForm.value.from; index <= this.generateForm.value.to; index++) {
      this.roomForm.patchValue({
        stage_id : this.stage.id,
        name: this.generateForm.value.name+' '+index,
      })
      this.addRoom()
    }
  }


  addRoom(){
    let form: Room = this.roomForm.value
    form.stage_id = this.stage.id
    console.log(form);

    this._room.addRoom(form).subscribe({
      next: (res: any) => {
        console.log(res)
        this.reloadEvent.emit()
        this.statut = false
      },
      error: (error: any) => console.log(error),
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