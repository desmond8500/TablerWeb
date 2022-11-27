import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  header: Header = {
    title: "Dashboard",
    subtitle: "Dashboard",
  }
  constructor(
    private modalService: NgbModal,
  ) { }

  @ViewChild('infoModalID') infoModal: any

  ngOnInit(): void {
  }

  load(){
    this.modalService.open(this.infoModal)
  }

}
