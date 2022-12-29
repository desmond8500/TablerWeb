import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  // serverLink: string = "http://localhost:8000/api"
  appTitle: string = "Tabler"
  appVersion: string = "1.0"
  // serverLink: string = "https://dashlite.yonkou.info/api"
  serverLink: string = "https://dash.tytoservices.com/api"


  constructor(
    private _http: HttpClient
  ) {
    this.init()
  }

  getServerLink(){
    return this.serverLink
  }

  getAppName(){
    return this.appTitle
  }

  getJSON(): Observable<any> {
    return this._http.get("/assets/config.json");
  }

  init(){
    this._http.get("/assets/config.json").subscribe({
      next: (res: any) => {
        console.log(res.name+" "+" "+res.version+" "+res.server);

        this.serverLink = res.server
        this.appTitle = res.name
        this.appVersion = res.version
      },
      error: (error: any) => console.log(error),
    })
  }
}
