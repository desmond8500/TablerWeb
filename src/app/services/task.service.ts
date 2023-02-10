import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  server = this._env.getServerLink()

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Task

  getTaskList(form: any):Observable<any>{
    return this._http.post(this.server+'/get_tasks', form)
  }
  getTasks():Observable<any>{
    return this._http.get(this.server+'/tasks')
  }
  addTask(postForm:any):Observable<any>{
    return this._http.post(this.server+'/tasks', postForm)
  }
  updateTask(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/tasks/'+postForm.id, postForm)
  }
  deleteTask(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/tasks/'+postForm.id)
  }
}
