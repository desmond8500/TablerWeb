import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
   header: Header = {
    title: 'Fournisseurs',
    subtitle: 'Stock'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
