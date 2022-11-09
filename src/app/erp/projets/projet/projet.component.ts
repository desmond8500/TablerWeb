import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Header } from 'src/app/interfaces/header';
import { ClientService } from 'src/app/services/client.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  header: Header = {
    title: "Projet",
    subtitle: "ERP",
  }
  projet_id: any
  projet$: any
  client$: any
  active: any = 6

   breadcrumbs: any = [
    { name: "ERP", route: '/erp/clients' },
    { name: "Clients", route: '/erp/clients' },
    { name: "Client", route: '/erp/client' },
    { name: "Projet", route: '/erp/projet' },
  ]

  constructor(
    private route: ActivatedRoute,
    private _projet: ProjetService,
    private _client: ClientService,
  ) {}

  ngOnInit(): void {
    this.projet_id = this.route.snapshot.paramMap.get('id');
    this.getProjet()
  }

  getProjet(){
    this._projet.getProjet({id: this.projet_id}).subscribe({
      next: (res) => {
        this.projet$ = res.data
        this.breadcrumbs[3].name = this.projet$.name
        this.header.title = "Projet : "+this.projet$.name

        this.getClient(this.projet$.client_id)
      },
      error: (error) => console.log(error),
    })
  }
  getClient(id: any){
    this._client.getClient({id: id}).subscribe({
      next: (res) => {
        console.log(res)
        this.client$ = res.data
        this.breadcrumbs[2].name = this.client$.name
        this.breadcrumbs[2].route = '/erp/client/'+this.client$.id
      },
      error: (error) => console.log(error),
    })
  }

}
