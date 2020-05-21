import { Component, OnInit, OnDestroy, AfterContentInit, OnChanges } from '@angular/core';
import { CookieAuth } from 'src/app/cookie-service/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit, OnChanges {
  account: boolean = this.cookie.isHaveToken();
  admin: boolean;
  constructor(private cookie: CookieAuth) {}


  xoaToken(){
    this.cookie.xoaToken();
    this.cookie.xoaMaLoaiNguoiDung();
    this.cookie.xoaTaiKhoan();
    location.reload();
  }

  ngOnInit(): void {
    if(this.cookie.getMaLoaiNguoiDung() === 'QuanTri'){
      this.admin = true;
    }else{
      this.admin = false;
    }
    console.log(this.admin);
  }

  ngAfterContentInit(): void{

  }

  ngOnChanges(): void{
    this.account = this.cookie.isHaveToken();
    if(this.cookie.getMaLoaiNguoiDung() === 'QuanTri'){
      this.admin = true;
    }else{
      this.admin = false;
    }
  }

}
