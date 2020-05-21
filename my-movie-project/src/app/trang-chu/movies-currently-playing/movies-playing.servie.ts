import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class MoviesService {

  constructor(private _http:HttpClient) { }
  LayDanhSachPhim(): Observable<any>{
    let url = `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=2&soPhanTuTrenTrang=9`;
    return  this._http.get(url);
  }
  LayChiTietPhim(MaPhim): Observable<any>{
    let apiChiTietPhim = `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${MaPhim}`;
    return this._http.get(apiChiTietPhim);
  }
  LayChiTietPhongVe(MaLichChieu): Observable<any>{
    let apiChiTietPhongVe = `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${MaLichChieu}`;
    return this._http.get(apiChiTietPhongVe);
  }
}
