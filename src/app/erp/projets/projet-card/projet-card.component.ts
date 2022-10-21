import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projet-card',
  templateUrl: './projet-card.component.html',
  styleUrls: ['./projet-card.component.scss']
})
export class ProjetCardComponent implements OnInit {
  @Input() projet: any
  @Input() editButton: any
  @ViewChild('editProjetID') editProjetModal: any

  statuts: any = this._data.statuts

  projetForm: FormGroup = this.fb.group({
      client_id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _data: DataService,
    private route: Router,
  ) {}

  ngOnInit(): void {
  }

  gotoProjet(){
    this.route.navigate(['erp/projet',this.projet.id ])
  }

  editProjet(){
    this.projetForm.patchValue({
      client_id: this.projet?.client_id,
      name: this.projet?.name,
      status: this.projet?.status,
      description: this.projet?.description,
    })
    this.modalService.open(this.editProjetModal)
  }
  updateProjet(){

  }
  deleteProjet(){

  }

}
