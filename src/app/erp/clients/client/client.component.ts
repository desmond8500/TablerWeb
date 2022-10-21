import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  user_id: any
  client$: any
  projets$: any

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _client: ClientService,
    private _projet: ProjetService,
  ) {}

  ngOnInit(): void {
    this.user_id = this.route.snapshot.paramMap.get('id');
    this.getclient()
    this.getProjets()
  }

  getclient(){
    this._client.getClient({id: this.user_id}).subscribe({
      next: (res) => {
        this.client$ = res.data
        // this.getProjets(this.client$.id)
      },
    })
  }

  getProjets(){
    this._projet.getClientProjets({client_id: this.user_id}).subscribe({
      next: (res) => { this.projets$ = res.data },
      error: (error) => console.log(error),
    })
  }



}
