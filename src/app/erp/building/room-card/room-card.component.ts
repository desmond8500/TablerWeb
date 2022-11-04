import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Room } from 'src/app/interfaces/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {
  @Input() room: any
  @Output() reloadEvent = new EventEmitter()
  @ViewChild('editRoomID') editRoomModal: any
  @ViewChild('roomID') roomModal: any

   roomForm: FormGroup = this.fb.group({
    stage_id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    // order: new FormControl(),
    description: new FormControl(),
  })

  statut: boolean = true

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _room: RoomService,
  ) { }

  ngOnInit(): void {
  }

  getArticles(){

  }

  editRoom(){
    this.roomForm.patchValue({
      stage_id: this.room.stage_id,
      name: this.room.name,
      description: this.room.description,
    })
    this.modalService.open(this.editRoomModal)
  }
  updateRoom(){
    let form: Room = this.roomForm.value
    form.id = this.room.id
    console.log(form);

    this._room.updateRoom(form).subscribe({
      next: (res:any) => {
        console.log(res)
        this.reloadEvent.emit()
        this.statut = false
        // this.modalService.dismissAll()
      },
      error: (error:any) => console.log(error),
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
