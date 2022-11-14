import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {


  server = this._env.getServerLink()

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Brand

  getBrands():Observable<any>{
    return this._http.get(this.server+'/brands')
  }
  addBrand(postForm:any):Observable<any>{
    return this._http.post(this.server+'/brands', postForm)
  }
  updateBrand(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/brands/'+postForm.id, postForm)
  }
  deleteBrand(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/brands/'+postForm.id)
  }
}
