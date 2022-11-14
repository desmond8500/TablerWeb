import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  server = this._env.getServerLink()

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Provider

  getProviders():Observable<any>{
    return this._http.get(this.server+'/providers')
  }
  addProvider(postForm:any):Observable<any>{
    return this._http.post(this.server+'/providers', postForm)
  }
  updateProvider (postForm :any):Observable<any>{
    return this._http.patch(this.server+'/providers/'+postForm.id, postForm)
  }
  deleteProvider (postForm :any):Observable<any>{
    return this._http.delete(this.server+'/providers/'+postForm.id)
  }
}
