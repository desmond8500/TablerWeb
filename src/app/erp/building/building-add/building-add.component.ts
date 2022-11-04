import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Building } from 'src/app/interfaces/building';
import { BuildingService } from 'src/app/services/building.service';

@Component({
  selector: 'app-building-add',
  templateUrl: './building-add.component.html',
  styleUrls: ['./building-add.component.scss']
})
export class BuildingAddComponent implements OnInit {
  @Input() projet_id: any
  @Output() reloadEvent = new EventEmitter()

  buildingForm: FormGroup = this.fb.group({
    projet_id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _building: BuildingService,
  ) { }

  ngOnInit(): void {
  }

   addBuilding(){
    let form: Building = this.buildingForm.value
    form.projet_id = this.projet_id
    console.log(form);

    this._building.addBuilding(form).subscribe({
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
