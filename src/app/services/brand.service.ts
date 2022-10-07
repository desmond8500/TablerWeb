import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  server = this._env.getServerLink
  constructor(
    private _http: HttpClient,
    private _env: EnvService,
  ) { }

  
  // Brand
  
  getBrand():Observable<any>{
    return this._http.get(this.server+'/')
  }
  addBrand(postForm:any):Observable<any>{
    return this._http.post(this.server+'/', postForm)
  }
  updateBrand(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/'+postForm.id, postForm)
  }
  deleteBrand(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/'+postForm.id)
  }
}
