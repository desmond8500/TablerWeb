import { Component, OnInit } from '@angular/core';
import { Nav } from '../interfaces/nav';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appName: string

  links: Nav[] = [
    { name: "Accueil", route: 'index' },
  ]
  constructor(
    private _env: EnvService
  ) {
    this.appName = this._env.getAppName()
  }

  ngOnInit(): void {
  }

}
