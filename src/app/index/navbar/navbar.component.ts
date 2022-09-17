import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    appName: string
  logged: boolean = false
  user$: any

  links: any = [
    { name: "Accueil", route: 'index' },
  ]

  loginForm: FormGroup = this.fb.group({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(12)])
  })

  inputPasswordType: string = "password"

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


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

    showPassword() {
    if (this.inputPasswordType == "text") {
      this.inputPasswordType = "password";
    } else {
      this.inputPasswordType = "text";
    }
  }
  eraseEmailField(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: [this.loginForm.value.password, Validators.required]
    })

  }


    closeResult = '';

    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'sm'}).result.then((result) => {
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
