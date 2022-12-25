import { Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss']
})
export class SectionCardComponent implements OnInit {
  @ViewChild('editsectionID') editSectionModal: any
  @Output() reload = new EventEmitter()
  @Input() section: any

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
  }

  editSection(){
    this.sectionForm.patchValue({
      id: this.section.id,
      report_id: this.section.report_id,
      title: this.section.title,
      description: this.section.description,
      order: this.section.order,
    })
    this.modalService.open(this.editSectionModal)
  }

  updateSection(){
    this._report.updateReportSection(this.sectionForm.value).subscribe({
      next: (res: any) => {
        this.modalService.dismissAll()
        this.reload.emit()
      },
      error: (error: any) => console.log(error),
    })
  }

  deleteSection(){
    this._report.deleteReportSection(this.section).subscribe({
      next: (res: any) => {
        this.reload.emit()
        this.modalService.dismissAll()
      },
      error: (error: any) => console.log(error),
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
