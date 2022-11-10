import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Provider } from 'src/app/interfaces/provider';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss']
})
export class ProviderCardComponent implements OnInit {

  @Input() provider: any
  @Output() reloadEvent = new EventEmitter()
  @ViewChild('editProviderID') editModal:any
  providerForm: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    logo: new FormControl(),
    description: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _provider: ProviderService,
  ) {}

  ngOnInit(): void {
  }

  editBrand(){
    this.providerForm.patchValue({
      id: this.provider?.id,
      name: this.provider?.name,
      description: this.provider?.description,
    })
    console.log(this.providerForm.value);

    this.modalService.open(this.editModal)
  }
  updateProvider(){
    let form: Provider = this.providerForm.value
    form.id = this.provider.id

    this._provider.updateProvider(form).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.provider = form
      },
      error: (error) => console.log(error),
    })
  }
  deleteProvider(){
    this._provider.deleteProvider({id: this.provider.id}).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.reloadEvent.emit()
        // this.route.navigate(['erp/brands'])
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
