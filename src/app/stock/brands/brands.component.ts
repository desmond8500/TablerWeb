import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
 header: Header = {
    title: 'Marques',
    subtitle: 'Stock'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
