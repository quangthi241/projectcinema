import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatveService {

  constructor(private http:HttpClient) { }
  DatVe(ve): Observable<any>{
    let url=`http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`;
    const body = ve;
    return  this.http.post(url,body, {responseType: "text" });
  }
}
