import { Component, OnInit } from '@angular/core';
import { Nav } from '../interfaces/nav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: Nav[] = [
    { name: "Accueil", route: 'index' },
    { name: "Clients", route: 'clients' },
    { name: "Plannings", route: 'plannings' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
