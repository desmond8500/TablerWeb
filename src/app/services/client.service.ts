import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  server: string = this._env.getServerLink()
  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) { }

  // Client

  getClient(form: any):Observable<any>{
    return this._http.get(this.server+'/clients/'+form.id)
  }
  getClients():Observable<any>{
    return this._http.get(this.server+'/clients')
  }
  addClient(postForm:any):Observable<any>{
    return this._http.post(this.server+'/clients', postForm)
  }
  updateClient(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/clients'+postForm.id, postForm)
  }
  deleteClient(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/clients'+postForm.id)
  }
}
