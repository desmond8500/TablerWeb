import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() header = {
    title: 'Tableau de bord',
    subtitle: 'Tableau de bord',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
