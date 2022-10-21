import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Header } from 'src/app/interfaces/header';
import { ClientService } from 'src/app/services/client.service';

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
  ) {}

  ngOnInit(): void {
     this.user_id = this.route.snapshot.paramMap.get('id');
     this.getclient()
  }

  getclient(){
    this._client.getClient({id: this.user_id}).subscribe({
      next: (res) => {
        this.client$ = res.data
      },
    })
  }

  getProjets(){

  }


}
