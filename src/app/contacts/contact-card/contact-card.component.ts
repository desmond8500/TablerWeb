import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: any
  @Output() reloadEvent = new EventEmitter()
  @ViewChild('editContactID') editModal:any
  @ViewChild('ContactDetailID') ContactDetail:any
  @ViewChild('contactAddEmailID') contactAddEmail:any
  @ViewChild('contactAddTelID') contactAddTel:any

  contactForm: FormGroup = this.fb.group({
    firstname: new FormControl(),
    lastname: new FormControl(),
    description: new FormControl(),
  })
  telForm: FormGroup = this.fb.group({
    contact_id: new FormControl(),
    tel: new FormControl(),
  })
  mailForm: FormGroup = this.fb.group({
    contact_id: new FormControl(),
    email: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _contact: ContactService,
  ) {}

  ngOnInit(): void {
  }

  showContact(){
    this.modalService.open(this.ContactDetail)
  }

  editContact(){
    this.contactForm.patchValue({
      id: this.contact?.id,
      firstname: this.contact?.firstname,
      lastname: this.contact?.lastname,
      description: this.contact?.description,
    })
    console.log(this.contactForm.value);

    this.modalService.open(this.editModal)
  }
  updateContact(){
    let form: Contact = this.contactForm.value
    form.id = this.contact.id

    this._contact.updateContact(form).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.contact = form
      },
      error: (error) => console.log(error),
    })
  }
  deleteContact(){
    let form: Contact = this.contactForm.value
    this._contact.deleteContact({id: this.contact.id}).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
         this.reloadEvent.emit()
        // this.route.navigate(['erp/contacts'])
      },
      error: (error) => console.log(error),
    })
  }

  addTel(){
    let form: any = {
      contact_id: this.contact.id,
      tel: this.telForm.value.tel
    }
    console.log(form);

    this._contact.addTel(form).subscribe({
      next: (res) => {
        console.log(res)
        this.reloadEvent.emit()
        // this.modalService.dismissAll()
      },
      error: (error) => console.log(error),
    })
  }
  addMail(){
    let form: any = {
      contact_id: this.contact.id,
      email: this.mailForm.value.email
    }
    console.log(form);

    this._contact.addMail(form).subscribe({
      next: (res) => {
        console.log(res)
        this.reloadEvent.emit()
        // this.modalService.dismissAll()
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
