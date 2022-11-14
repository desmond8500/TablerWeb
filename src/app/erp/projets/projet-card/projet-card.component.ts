import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet-card',
  templateUrl: './projet-card.component.html',
  styleUrls: ['./projet-card.component.scss']
})
export class ProjetCardComponent implements OnInit {
  @Input() projet: any
  @Input() editButton: any
  @Output() reloadEvent = new EventEmitter()

  @ViewChild('editProjetID') editProjetModal: any

  statuts: any

  projetForm: FormGroup = this.fb.group({
      client_id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      statut: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    })

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _data: DataService,
    private route: Router,
    private _projet: ProjetService,
  ) {}

  ngOnInit(): void {
    this.getStatut()
  }
  getStatut(){
    this._data.getStatus().subscribe({
      next: (res: any) => {
        this.statuts = res.data
      },
      error: (error: any) => console.log(error),
    })
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
    let form = {
      id: this.projet.id,
      client_id: this.projetForm.value.client_id,
      name: this.projetForm.value.name,
      status: this.projetForm.value.status,
      description: this.projetForm.value.description,
    }
    this._projet.updateProjet(form).subscribe({
      next: (res) => {
        console.log(res)
        this.modalService.dismissAll()
        this.reloadEvent.emit()
      },
      error: (error) => console.log(error),
    })
  }
  deleteProjet(){
    this._projet.deleteProjet({id: this.projet.id}).subscribe({
      next: (res) => {
        this.modalService.dismissAll()
        this.reloadEvent.emit()
      },
      error: (error) => console.log(error),
    })
  }

}
