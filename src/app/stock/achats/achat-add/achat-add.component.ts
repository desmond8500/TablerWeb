import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AchatService } from 'src/app/services/achat.service';

@Component({
  selector: 'app-achat-add',
  templateUrl: './achat-add.component.html',
  styleUrls: ['./achat-add.component.scss']
})
export class AchatAddComponent implements OnInit {

  @Output() reloadEvent = new EventEmitter()
    constructor(
      private modalService: NgbModal,
      private _achat: AchatService,
      private fb: FormBuilder,
      ) {}

    brandForm: FormGroup = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(),
      description: new FormControl(),
    })

    ngOnInit(): void {
    }

    addAchat(){
      let form: any = this.brandForm.value
      console.log(form);

      this._achat.addAchat(form).subscribe({
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