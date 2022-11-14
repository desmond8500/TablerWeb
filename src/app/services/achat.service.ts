import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class AchatService {


  server = this._env.getServerLink()

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Achat

  getAchats():Observable<any>{
    return this._http.get(this.server+'/achats')
  }
  addAchat(postForm:any):Observable<any>{
    return this._http.post(this.server+'/achats', postForm)
  }
  updateAchat(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/achats/'+postForm.id, postForm)
  }
  deleteAchat(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/achats/'+postForm.id)
  }
}
