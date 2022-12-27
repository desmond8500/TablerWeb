import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from 'src/app/interfaces/header';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients$: any
  header: Header = {
    title: 'Clients',
    subtitle: "ERP"
  }
  breadcrumbs: any = [
    { name: "ERP", route: '/erp/clients' },
    { name: "Clients", route: '/erp/clients' },
  ]

  constructor(
    private _client: ClientService,
    private route: Router,
    ) { }

  ngOnInit(): void {
    this.getClients()
  }

  getClients(){
    this._client.getClients().subscribe(
      res => {
        this.clients$ = res.data
      },
      err => { console.log(err) }
    )
  }

  goToClient(client_id: any){
    this.route.navigate(['erp/client', client_id])
  }

}
