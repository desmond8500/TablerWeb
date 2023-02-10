import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Breadcrumb } from '../interfaces/breadcrumb';
import { Header } from '../interfaces/header';
import { DataService } from '../services/data.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  header: Header = {
    title: 'Liste des taches',
    subtitle: 'Taches'
  }

  breadcrumbs: Breadcrumb[] = [
    { name: "Taches", route: "/tasks" }
  ]

  task$: any
  priority$: any
  status$: any

  constructor(
    private _task: TaskService,
    private _data: DataService,
    private route: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this._task.getTasks().subscribe({
      next: (res: any) => {
        console.log(res)

      },
      error: (error: any) => console.log(error),
    })
  }

}
