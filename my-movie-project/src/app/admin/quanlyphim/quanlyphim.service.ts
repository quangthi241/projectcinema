import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie  } from 'src/app/models/movie';
@Injectable()
export class MovieService {
  baseUrl = `http://movie0706.cybersoft.edu.vn/api`;

  constructor(private _http:HttpClient) { }

  LayDanhSachPhim(): Observable<any>{
    let url = `${this.baseUrl}/QuanLyPhim/LayDanhSachPhim?maNhom=GP04`;
    return  this._http.get(url);
  }

  ThemPhim(movie: Movie): Observable<any>{
    let url = `${this.baseUrl}/QuanLyPhim/ThemPhim`;
    return this._http.post(url, movie);
  }

  SuaThongTinPhim(movie: Movie): Observable<any>{
    let url = `${this.baseUrl}/QuanLyPhim/CapNhatPhim`;
    return this._http.post(url, movie);
  }

  XoaPhim(maPhim: string){
    let url = `${this.baseUrl}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    return this._http.delete(url, {responseType: 'text'});
  }


}
