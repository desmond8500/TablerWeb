import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-brand-add-modal',
  templateUrl: './brand-add-modal.component.html',
  styleUrls: ['./brand-add-modal.component.scss']
})
export class BrandAddModalComponent implements OnInit {

  brandForm: FormGroup = this.fb.group({
    name: new FormControl()
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
