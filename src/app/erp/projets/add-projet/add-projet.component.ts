import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {
  @Input() client_id: any
  statuts: any

  projetForm: FormGroup = this.fb.group({
    client_id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    type: new FormControl(1, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(12)])
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _projet: ProjetService,
    private _data: DataService,
  ) {
  }

  ngOnInit(): void {
    this.statuts = this._data.statuts
  }

  addProjet(){
    let projet = this.projetForm.value
    projet.client_id = this.client_id

    this._projet.addProjet(projet).subscribe({
      next: (res) => {
        console.log(res)
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
