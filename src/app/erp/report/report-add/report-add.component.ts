import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.scss']
})
export class ReportAddComponent implements OnInit {
  reportTypes: any = this._data.reportType
  reportForm: FormGroup = this.fb.group({
    projet_id: new FormControl(null, [Validators.required]),
    objet: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
  })

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _report: ReportService,
    private _data: DataService,
  ) {}

  ngOnInit(): void {
  }

  addReport(){

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