
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class DangnhapSevice{
  constructor(private _http:HttpClient) {}
  dangNhap(taiKhoan, matKhau): Observable<any>{
    let url = `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;
    let header = new HttpHeaders({'Content-Type':'application/json'});
    const body = {taiKhoan, matKhau};
    return  this._http.post(url,body,{ headers: header });
  }
}
