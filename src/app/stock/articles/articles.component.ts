import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  header: Header = {
    title: 'Articles',
    subtitle: 'Stock'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
