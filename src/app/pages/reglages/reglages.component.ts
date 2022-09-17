import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-reglages',
  templateUrl: './reglages.component.html',
  styleUrls: ['./reglages.component.scss']
})
export class ReglagesComponent implements OnInit {
  header: Header = {
    title: "Réglages",
    subtitle: "Réglages"
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
