import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  server = this._env.getServerLink()

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Article

  getArticles():Observable<any>{
    return this._http.get(this.server+'/articles')
  }
  addArticle(postForm:any):Observable<any>{
    return this._http.post(this.server+'/articles', postForm)
  }
  updateArticle(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/articles/'+postForm.id, postForm)
  }
  deleteArticle(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/articles/'+postForm.id)
  }
}
