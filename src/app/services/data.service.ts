import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  server: any = this._env.getServerLink()

  reportType: any = [
    { code: 1, name: "Rapport de visite"},
    { code: 2, name: "Rapport d'intervention" },
    { code: 3, name: "Rapport d'incident" },
    { code: 4, name: "Proposition technique" },
  ]
  status: any = [
    { code: 1, name: "Nouveau"},
    { code: 2, name: "En Cours" },
    { code: 3, name: "En Pause" },
    { code: 4, name: "Annulé" },
    { code: 5, name: "Terminé" },
  ]
  priority: any = [
    { code: 1, name: "Basse"},
    { code: 2, name: "Moyenne" },
    { code: 3, name: "Haute" },
  ]

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  getStatus():Observable<any>{
    return this._http.get(this.server+'/priorities')
  }

  getStatut():Observable<any>{
    return this._http.get(this.server+'/priorities')
  }
}
