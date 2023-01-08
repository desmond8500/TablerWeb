import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  server = this._env.getServerLink()

  constructor(
    private _env: EnvService,
    private _http: HttpClient,
  ) {}
  // Invoices

  getInvoices():Observable<any>{
    return this._http.get(this.server+'/invoices')
  }
  getInvoice(form:any):Observable<any>{
    return this._http.get(this.server+'/invoices/'+form.id)
  }
  getProjet_invoices(form: any):Observable<any>{
    return this._http.get(this.server+'/projet_invoices', form)
  }
  getRoom_invoices(form: any):Observable<any>{
    return this._http.post(this.server+'/room_invoices', form)
  }
  addInvoice(postForm:any):Observable<any>{
    return this._http.post(this.server+'/invoices', postForm)
  }
  updateInvoice(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/invoices/'+postForm.id, postForm)
  }
  deleteInvoice(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/invoices/'+postForm.id)
  }

  // InvoiceRow

  getInvoiceRows(form: any):Observable<any>{
    return this._http.post(this.server+'/get_invoice_rows', form)
  }
  getInvoiceRow(form: any):Observable<any>{
    return this._http.post(this.server+'/invoice_rows', form.id)
  }
  addInvoiceRow(postForm:any):Observable<any>{
    return this._http.post(this.server+'/invoice_rows', postForm)
  }
  updateInvoiceRow(postForm :any):Observable<any>{
    return this._http.patch(this.server+'/invoice_rows/'+postForm.id, postForm)
  }
  deleteInvoiceRow(postForm :any):Observable<any>{
    return this._http.delete(this.server+'/invoice_rows/'+postForm.id)
  }
}

