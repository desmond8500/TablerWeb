import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Nav } from '../interfaces/nav';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appName: string
  logged: boolean = false
  user$: any

  links: Nav[] = [
    { name: "Accueil", route: 'index' },
  ]

 loginForm: FormGroup = this.fb.group({
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(
    private _env: EnvService,
    private route: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) {
    this.appName = this._env.getAppName()
  }

  ngOnInit(): void {
  }

  logging(){
    this.logged = true
  }

  logout(){
    this.logged = false
    // localStorage.clear()
    // this.route.navigate(['guest'])
  }


    closeResult = '';

    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: result`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: reason`;
      }
    }

}
