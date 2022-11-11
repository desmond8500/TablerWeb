import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  server: any = this._env.getServerLink()

  statuts: any = [
    { code: 1, name: "Nouveau" },
    { code: 2, name: "En cours" },
    { code: 3, name: "En pause" },
    { code: 4, name: "Annulé" },
    { code: 5, name: "Terminé" },
  ]
  reportType: any = [
    { code: 1, name: "Rapport de visite"},
    { code: 2, name: "Rapport d'intervention" },
    { code: 3, name: "Rapport d'incident" },
    { code: 4, name: "Proposition technique" },
  ]

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  getStatus():Observable<any>{
    return this._http.get(this.server+'/priorities')
  }
}
