import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  server: string = this._env.getServerLink()
  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) { }

  // Report
  getReports():Observable<any>{
    return this._http.get(this.server+'/reports')
  }
  getReport(id:any):Observable<any>{
    return this._http.get(this.server+'/reports/'+id)
  }
  addReport(postForm:any):Observable<any>{
    return this._http.post(this.server+'/reports', postForm)
  }
  updateReport(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/reports/'+postForm.id, postForm)
  }
  deleteReport(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/reports/'+postForm.id)
  }
  // Report
  getReportSections(id: any):Observable<any>{
    return this._http.post(this.server+'/get_report_section/', id)
  }
  addReportSection(postForm:any):Observable<any>{
    return this._http.post(this.server+'/report_sections', postForm)
  }
  updateReportSection(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/report_sections/'+postForm.id, postForm)
  }
  deleteReportSection(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/report_sections/'+postForm.id)
  }
}
