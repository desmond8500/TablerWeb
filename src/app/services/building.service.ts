import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  server = this._env.getServerLink()
  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Building

  getBuildings():Observable<any>{
    return this._http.get(this.server+'/buildings')
  }
  getProjetBuilding(form:any):Observable<any>{
    return this._http.post(this.server+'/projet_buildings', form)
  }
  getBuilding(postForm:any):Observable<any>{
    return this._http.post(this.server+'/buildings', postForm)
  }
  addBuilding(postForm:any):Observable<any>{
    return this._http.post(this.server+'/buildings', postForm)
  }
  updateBuilding (postForm :any):Observable<any>{
    return this._http.patch(this.server+'/buildings/'+postForm.id, postForm)
  }
  deleteBuilding (postForm :any):Observable<any>{
    return this._http.delete(this.server+'/buildings/'+postForm.id)
  }
}
