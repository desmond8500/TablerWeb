import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  server = this._env.getServerLink()
  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}

  // Room

  getRooms():Observable<any>{
    return this._http.get(this.server+'/rooms')
  }
  addRoom(postForm:any):Observable<any>{
    return this._http.post(this.server+'/rooms', postForm)
  }
  updateRoom(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/rooms/'+postForm.id, postForm)
  }
  deleteRoom(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/rooms/'+postForm.id)
  }
}
