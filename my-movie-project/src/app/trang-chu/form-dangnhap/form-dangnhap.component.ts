import { Routes, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, DoCheck, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DangnhapSevice } from './dangnhap.service';
import { dangNhap } from './objdangnhap';
import { CookieAuth } from '../../cookie-service/cookie.service';

@Component({
  selector: 'app-form-dangnhap',
  templateUrl: './form-dangnhap.component.html',
  styleUrls: ['./form-dangnhap.component.scss'],
  providers: [DangnhapSevice, CookieAuth]
})
export class FormDangnhapComponent implements OnInit, OnDestroy, DoCheck, OnChanges  {
  public show: boolean = this.cookie.isHaveToken() ;
  constructor(private apiDangNhap: DangnhapSevice, private router: Router, private cookie: CookieAuth) { }

  formDangNhap:FormGroup;
  DangNhap(){
    let nguoidungDN = this.formDangNhap.value;
    this.apiDangNhap.dangNhap(nguoidungDN.taiKhoan, nguoidungDN.matKhau).subscribe(
      (kq) => {
        if(typeof(kq) === 'object'){
          console.log(kq);
          this.cookie.setCookie('token', kq.accessToken);
          this.cookie.setCookie('taikhoan', kq.taiKhoan);
          this.cookie.setCookie('maLoaiNguoiDung', kq.maLoaiNguoiDung);
          alert('Đăng Nhập Thành Công')
          if(kq.maLoaiNguoiDung == 'QuanTri'){
            this.router.navigate(['/qluser']);
          }else{
            location.reload();
          }
        }else{
          alert('Tai khoan hoac mat khau chua dung');
        }
      },
      (error) => {
        console.log(error);
        alert(error.error);
      }
    )
  }

  ngOnInit(): void {
    this.formDangNhap = new FormGroup({
      'taiKhoan' : new FormControl(null, Validators.required),
      'matKhau': new FormControl(null,  Validators.required),
    });
  }

  ngOnDestroy(): void{
    // console.log('Destroy');
  }

  ngDoCheck(): void{
    // console.log('docheck');
  }

  ngOnChanges(): void{
  }
}
