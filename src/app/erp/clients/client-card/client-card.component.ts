import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() client?: Client
  @Input() editButton: boolean = false
  @ViewChild('editClientID') editClientModal: any

   clientForm: FormGroup = this.fb.group({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null,),
  })
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _client: ClientService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  editClient(){
    this.clientForm.patchValue({
      id: this.client?.id,
      name: this.client?.name,
      description: this.client?.description,
    })
    this.modalService.open(this.editClientModal)
  }

  updateClient(){
    let form: Client = this.clientForm.value

    this._client.updateClient(form).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.client = form
      },
      error: (error) => console.log(error),
    })
  }

  deleteClient(){
    let form: Client = this.clientForm.value
    this._client.deleteClient(form).subscribe({
      next: (res: any) => {
        this.modalService.dismissAll()
        this.route.navigate(['erp/clients'])
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
