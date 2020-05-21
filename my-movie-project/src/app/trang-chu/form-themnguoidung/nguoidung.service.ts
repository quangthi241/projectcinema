import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung  } from 'src/app/models/nguoidung';
@Injectable()
export class NguoidungService {
  baseUrl = `http://movie0706.cybersoft.edu.vn/api`;

  constructor(private _http:HttpClient) { }

  LayDanhSachNguoiDung(): Observable<any>{
    let url = `${this.baseUrl}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04`;
    return  this._http.get(url);
  }

  ThemNguoiDung(nguoidung: NguoiDung): Observable<any>{
    let url = `${this.baseUrl}/QuanLyNguoiDung/ThemNguoiDung`;
    return this._http.post(url, nguoidung);
  }

  XoaNguoiDung(taiKhoan: string){
    let url = `${this.baseUrl}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return this._http.delete(url, {responseType: 'text'});
  }
  dangKy(nguoidung: NguoiDung){
    let url = `${this.baseUrl}/QuanLyNguoiDung/DangKy`
    return this._http.post(url, nguoidung);
  }
}
