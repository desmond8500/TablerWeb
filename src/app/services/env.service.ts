import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  serverLink: string = ""
  appTitle: string = "Tabler"

  constructor(
    private _hhtp: HttpClient
  ) { }

  getServerLink(){
    return this.serverLink
  }

  getAppName(){
    return this.appTitle
  }


}
