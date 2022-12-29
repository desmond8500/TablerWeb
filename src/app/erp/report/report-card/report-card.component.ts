import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  @ViewChild('addSectionId') addSectionModal: any
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
  sectionForm: FormGroup = this.fb.group({
    id: new FormControl(null, [Validators.required]),
    report_id: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(),
    order: new FormControl(1),
  })

   constructor(
      private _report: ReportService,
      private modalService: NgbModal,
      // public activeModal: NgbActiveModal,
      private fb: FormBuilder,
      private _data: DataService,
      private route: Router,
    ) {}

  ngOnInit(): void {
    // this.getSections()
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
    this.getSections()
  }

  gotoReport(){
    this.route.navigate(['erp/report', this.report.id])
    this.modalService.dismissAll()
  }

  // section
  section$: any
  sectionAddButton: boolean = true
  getSections(){
    this._report.getReportSections({report_id: this.report.id}).subscribe({
      next: (res: any) => {
        this.section$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }
  showSectionForm(){
    this._report.getReportSections(this.report.id).subscribe({
      next: (res) => {
        // console.log(res.data.length);
        this.sectionForm.patchValue({
          report_id: this.report.id,
          order: res.data.length + 1,
        })
      }
    })
    this.modalService.open(this.addSectionModal)
  }
  addSection(){
    this._report.addReportSection(this.sectionForm.value).subscribe({
      next: (res: any) => {
        this.sectionAddButton = false
      },
      error: (error: any) => console.log(error),
    })
  }

}
