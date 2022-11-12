import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  server = this._env.getServerLink()

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Contact

  getContacts():Observable<any>{
    return this._http.get(this.server+'/contacts')
  }
  addContact(postForm:any):Observable<any>{
    return this._http.post(this.server+'/contacts', postForm)
  }
  updateContact(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/contacts/'+postForm.id, postForm)
  }
  deleteContact(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/contacts/'+postForm.id)
  }

  getTels():Observable<any>{
    return this._http.get(this.server+'/contact_tels')
  }
  addTel(postForm:any):Observable<any>{
    return this._http.post(this.server+'/contact_tels', postForm)
  }
  updateTel(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/contact_tels/'+postForm.id, postForm)
  }
  deleteTel(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/contact_tels/'+postForm.id)
  }

  getMails():Observable<any>{
    return this._http.get(this.server+'/contact_mails')
  }
  addMail(postForm:any):Observable<any>{
    return this._http.post(this.server+'/contact_mails', postForm)
  }
  updateMail(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/contact_mails/'+postForm.id, postForm)
  }
  deleteMail(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/contact_mails/'+postForm.id)
  }

}
