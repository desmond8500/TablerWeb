import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { Header } from 'src/app/interfaces/header';
import { ClientService } from 'src/app/services/client.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @ViewChild('editClientID') editClientModal: any
  header: Header = {
    title: 'Client',
    subtitle: 'Clients'
  }
  client_id: any
  client$: any
  projets$: any

  breadcrumbs: any = [
    { name: "ERP", route: '/erp/clients' },
    { name: "Clients", route: '/erp/clients' },
    { name: "Client", route: '.' },
  ]

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _client: ClientService,
    private _projet: ProjetService,
  ) {}

  ngOnInit(): void {
    this.client_id = this.route.snapshot.paramMap.get('id');
    this.getclient()
    this.getProjets()
  }

  getclient(){
    this._client.getClient({id: this.client_id}).subscribe({
      next: (res) => {
        this.client$ = res.data
        this.header.title = this.client$?.name
        this.breadcrumbs[2].name = this.client$.name
      },
    })
  }

  getProjets(){
    this._projet.getClientProjets({client_id: this.client_id}).subscribe({
      next: (res) => { this.projets$ = res.data },
      error: (error) => console.log(error),
    })
  }
}
