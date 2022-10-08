import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  header: Header = {
    title: 'Clients',
    subtitle: "ERP"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
