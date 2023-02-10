import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  @Input() devis_id: any
  @Output() reloadEvent: any = new EventEmitter()

  taskForm: FormGroup = this.fb.group({
    devis_id: new FormControl(null, [Validators.required]),
    objet: new FormControl(null, [Validators.required]),
    description: new FormControl(),
    status_id: new FormControl(null, [Validators.required]),
    priority_id: new FormControl(null, [Validators.required]),
  })

   constructor(
      // private _env: EnvService,
      // private route: Router,
      private modalService: NgbModal,
      private fb: FormBuilder,
    ) {}

  ngOnInit(): void {
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
