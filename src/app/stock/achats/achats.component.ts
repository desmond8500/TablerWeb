import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AchatService } from 'src/app/services/achat.service';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.scss']
})
export class AchatsComponent implements OnInit {
  @ViewChild('editAchatID') editModal:any

  achat$: any
  selected: any
  achatForm: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    date: new FormControl(),
    description: new FormControl(),
  })

  constructor(
    private _achat: AchatService,
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getAchats()
  }

  getAchats(){
    this._achat.getAchats().subscribe({
      next: (res: any) => {
        console.log(res)
        this.achat$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

  editAchat(achat: any){
    this.achatForm.patchValue({
      id: achat.id,
      name: achat.name,
      description: achat.description,
    })
    console.log(this.achatForm.value);
    this.selected = achat

    this.modalService.open(this.editModal)
  }
  updateAchat(){
    let form: any = this.achatForm.value
    form.id = this.selected.id

    this._achat.updateAchat(form).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        // this.achat = form
      },
      error: (error) => console.log(error),
    })
  }
  deleteAchat(){
    let form: any = this.achatForm.value
    this._achat.deleteAchat({id: this.selected.id}).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        //  this.reloadEvent.emit()
        // this.route.navigate(['erp/achats'])
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
