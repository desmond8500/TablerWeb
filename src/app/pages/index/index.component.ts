import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  header: Header = {
    title: "Dashbord",
    subtitle: "Dashbord",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
