import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.scss']
})
export class ProviderAddComponent implements OnInit {

  @Output() reloadEvent = new EventEmitter()
    constructor(
      private modalService: NgbModal,
      private _provider: ProviderService,
      private fb: FormBuilder,
      ) {}

    providerForm: FormGroup = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      logo: new FormControl(),
      description: new FormControl(),
    })

    ngOnInit(): void {
    }

    addProvider(){
      let form: any = this.providerForm.value
      console.log(form);

      this._provider.addProvider(form).subscribe({
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
