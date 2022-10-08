import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/client.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {
  @Output() relaodEvent: any = new EventEmitter()
  clientForm: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, []),
  })

  constructor(
    private _env: EnvService,
    // private route: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _client: ClientService,
  ) {}

  ngOnInit(): void {
  }

  addClient(){
    console.log(this.clientForm.value);
    this._client.addClient(this.clientForm.value).subscribe(res => {
      console.log(res)
      this.modalService.dismissAll()
      this.relaodEvent.emit(1)
    },
    err => {
      console.log(err)
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
