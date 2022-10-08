import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Header } from 'src/app/interfaces/header';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
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
    ) {}

  ngOnInit(): void {
     this.user_id = this.route.snapshot.paramMap.get('id');
     this.getclient()
  }

  getclient(){
    this._client.getClient({id: this.user_id}).subscribe(
      res => {
        // console.log(res)
        this.client$ = res.data
      },
      err => {
        // console.log(err)
      }
    )
  }

  getProjets(){

  }

}
