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
    private _http: HttpClient,
    private _env: EnvService,
  ) { }

  // Article

  getArticles():Observable<any>{
    return this._http.get(this.server+'/articles')
  }
  addArticle(postForm:any):Observable<any>{
    return this._http.post(this.server+'/articles', postForm)
  }
  updateArticle(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/articles'+postForm.id, postForm)
  }
  deleteArticle(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/articles'+postForm.id)
  }
  article_url(postForm:any):Observable<any>{
    return this._http.post(this.server+'/article_url', postForm)
  }

  getPriorities(){
    return [
      { name: "Centrale 1",    level: 1 },
      { name: "Centrale 2",    level: 2 },
      { name: "Centrale 3",    level: 3 },
      { name: "Organe 1",      level: 4 },
      { name: "Organe 2",      level: 5 },
      { name: "Organe 3",      level: 6 },
      { name: "Cable 1",       level: 7 },
      { name: "Cable 2",       level: 8 },
      { name: "Accessoire 1",  level: 9 },
      { name: "Accessoire 2",  level: 10 },
      { name: "Forfait 1",     level: 11 },
      { name: "Forfait 2",     level: 12 },
    ]
  }



}
