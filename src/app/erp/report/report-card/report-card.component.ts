import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Report } from 'src/app/interfaces/report';
import { DataService } from 'src/app/services/data.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {
  @Input() report: any
  @Input() editButton: boolean = false
  @ViewChild('editReportID') editReportModal: any
  @ViewChild('showReportID') showReportModal: any
  @Output() reload = new EventEmitter()

  reportTypes: any = this._data.reportType
  selectedReport?: Report

  reportForm: FormGroup = this.fb.group({
      id: new FormControl(null, [Validators.required]),
      projet_id: new FormControl(null, [Validators.required]),
      objet: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    })
   constructor(
      private _report: ReportService,
      private modalService: NgbModal,
      private fb: FormBuilder,
      private _data: DataService,
    ) {}

  ngOnInit(): void {
  }

  editReport(){
    this.reportForm.patchValue({
      objet: this.report?.objet,
      date: formatDate(this.report?.date, 'yyyy-MM-dd', 'fr'),
      // date: this.report?.date,
      type: this.report?.type,
      description: this.report?.description,
    })

    this.modalService.open(this.editReportModal)
  }
  updateReport(){
    let form: Report = this.reportForm.value
    form.projet_id = this.report?.projet_id
    form.id = this.report?.id

    this._report.updateReport(form).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.reload.emit(1)
      },
      error: (error) => console.log(error),
    })

  }
  deleteReport(){

  }
  showReport(){
    this.modalService.open(this.showReportModal)
  }

}
