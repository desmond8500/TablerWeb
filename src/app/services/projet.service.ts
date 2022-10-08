import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  server: string = this._env.getServerLink()
  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) { }

  // Projet

  getProjets(form:any):Observable<any>{
    return this._http.post(this.server+'/projets_by_client',form)
  }
  addProjet(postForm:any):Observable<any>{
    return this._http.post(this.server+'/projets', postForm)
  }
  updateProjet(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/projets'+postForm.id, postForm)
  }
  deleteProjet(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/projets'+postForm.id)
  }
}
