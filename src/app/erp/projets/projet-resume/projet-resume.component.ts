import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projet-resume',
  templateUrl: './projet-resume.component.html',
  styleUrls: ['./projet-resume.component.scss']
})
export class ProjetResumeComponent implements OnInit {
  @Output() select: any = new EventEmitter<string>()
  resumes: any = [
    { id: 1, name: 'Devis',    count: '00' },
    { id: 2, name: 'Rapports', count: '00' },
    { id: 3, name: 'Contacts', count: '00' },
    { id: 4, name: 'Finances', count: '00' },
    { id: 5, name: 'Batiment', count: '00' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  selectTab(id: any){
    this.select.emit(id)
  }

}
