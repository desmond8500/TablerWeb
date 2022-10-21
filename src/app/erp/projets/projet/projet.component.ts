import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Header } from 'src/app/interfaces/header';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  header: Header = {
    title: "Projet",
    subtitle: "ERP",
  }
  projet_id: any
  active: any = 3

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _projet: ProjetService,
  ) {}

  ngOnInit(): void {
    this.projet_id = this.route.snapshot.paramMap.get('id');
  }

}
