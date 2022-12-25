import { Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss']
})
export class SectionCardComponent implements OnInit {
  @ViewChild('addSectionId') addSectionModal: any
  @Output() reload = new EventEmitter()
  @Input() report_id: any

  section$: any
  sectionAddButton: boolean = true

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
      private fb: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.getSections()

  }



  // Sections
  getSections(){
    this._report.getReportSections().subscribe({
      next: (res: any) => {
        console.log(res)
        this.section$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }


}
