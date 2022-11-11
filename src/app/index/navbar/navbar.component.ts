import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Info } from 'src/app/interfaces/info';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appName: string
  logged: boolean = false
  inputPasswordType: string = "password"

  user$: any

  links: any = [
    { name: "Accueil", route: 'index' },
    { name: "Clients", route: 'erp/clients' },
    { name: "Contacts", route: 'contacts' },
    {
      name: "Stock",
      route: null,
      sublinks: [
        { name: "Articles", route: 'stock/stock' },
        { name: "Achats", route: 'stock/achats' },
        { name: "Fournisseurs", route: 'stock/providers' },
        { name: "Marques", route: 'stock/marques' },
      ]
    },
  ]

  loginForm: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(12)])
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

  login(){
    // this.logged = true
    // this.info.message
    this.modalService.dismissAll()
  }

  logout(){
    this.logged = false
    // localStorage.clear()
    // this.route.navigate(['guest'])
  }

  register(){
    console.log(this.loginForm.value);
  }

  reset(){
    console.log(this.loginForm.value);
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
    this.loginForm.patchValue({
      email: ''
    })
  }
  erasePasswordField(){
    this.loginForm.patchValue({
      password: ''
    })
  }
  eraseNameField(){
    this.loginForm.patchValue({
      name: ''
    })
  }

  // Modals
  @ViewChild('loginModalID') loginModal: any
  @ViewChild('registerModalID') registerModal: any
  @ViewChild('resetModalID') resetModal: any
  @ViewChild('infoModalID') infoModal: any

  openLoginModal(){
    this.modalService.dismissAll()
    this.modalService.open(this.loginModal)
  }
  openRegisterModal(){
    this.modalService.dismissAll()
    this.modalService.open(this.registerModal)
  }
  openResetModal(){
    this.modalService.dismissAll()
    this.modalService.open(this.resetModal)
  }

  info: Info = {
    titre: "Information",
    message: "Hello",
    type: "info"
  }
  openInfoModal(){
    this.modalService.dismissAll()
    this.modalService.open(this.infoModal)
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
