import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  serverLink: string = "http://localhost:8000/api"
  appTitle: string = "Tabler"

  constructor(
    private _http: HttpClient
  ) { }

  getServerLink(){
    return this.serverLink
  }

  getAppName(){
    return this.appTitle
  }


}
