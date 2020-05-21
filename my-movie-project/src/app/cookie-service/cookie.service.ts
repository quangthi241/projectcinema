import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export class CookieAuth{
  constructor(private cookie: CookieService){}
  public getToken(){
    return this.cookie.get('token');
  }

  public getTaiKhoan(){
    return this.cookie.get('taikhoan');
  }

  public getMaLoaiNguoiDung(){
    return this.cookie.get('maLoaiNguoiDung');
  }

  public setCookie(name, value){
    this.cookie.set(name, value);
  }

  public isHaveToken(): boolean{
    return this.cookie.check('token');
  }

  public xoaToken(){
    this.cookie.delete('token')
  }

  public xoaMaLoaiNguoiDung(){
    this.cookie.delete('maLoaiNguoiDung')
  }

  public xoaTaiKhoan(){
    this.cookie.delete('taikhoan')
  }

  public getCookie(name){
    this.cookie.get(name)
  }
}
