import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-resume',
  templateUrl: './projet-resume.component.html',
  styleUrls: ['./projet-resume.component.scss']
})
export class ProjetResumeComponent implements OnInit {
  resumes: any = [
    { name: 'Devis',    count: '00' },
    { name: 'Rapports', count: '00' },
    { name: 'Contacts', count: '00' },
    { name: 'Finances', count: '00' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
