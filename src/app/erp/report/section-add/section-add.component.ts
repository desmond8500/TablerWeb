import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportSection } from 'src/app/interfaces/report-section';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-section-add',
  templateUrl: './section-add.component.html',
  styleUrls: ['./section-add.component.scss']
})
export class SectionAddComponent implements OnInit {
  @Input() report_id: any
  @Output() reloadEvent = new EventEmitter()

  sectionForm: FormGroup = this.fb.group({
    report_id: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(),
    order: new FormControl(1),
  })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _report: ReportService,
  ) {}

  ngOnInit(): void {
  }

  addSection(){
    this.sectionForm.value.report_id = this.report_id

    this._report.addReportSection(this.sectionForm.value).subscribe({
      next: (res) => {
        this.reloadEvent.emit()
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
