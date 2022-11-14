import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  server = this._env.getServerLink()
  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Stage

  getStages():Observable<any>{
    return this._http.get(this.server+'/stages')
  }
  getBuildingStages(form:any):Observable<any>{
    return this._http.post(this.server+'/building_stages', form)
  }
  addStage(postForm:any):Observable<any>{
    return this._http.post(this.server+'/stages', postForm)
  }
  updateStage (postForm :any):Observable<any>{
    return this._http.patch(this.server+'/stages/'+postForm.id, postForm)
  }
  deleteStage (postForm :any):Observable<any>{
    return this._http.delete(this.server+'/stages/'+postForm.id)
  }
}
