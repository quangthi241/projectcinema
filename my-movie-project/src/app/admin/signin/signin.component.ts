import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DangnhapSevice } from '../../trang-chu/form-dangnhap/dangnhap.service';
import { CookieAuth } from '../../cookie-service/cookie.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [DangnhapSevice, CookieAuth]
})
export class SigninComponent implements OnInit {

  constructor(private apiDangNhap: DangnhapSevice, private router: Router, private cookie: CookieAuth) { }

  formDangNhap:FormGroup;
  DangNhap(){
    let nguoidungDN = this.formDangNhap.value;
      this.apiDangNhap.dangNhap(nguoidungDN.taiKhoan, nguoidungDN.matKhau).subscribe(
        (kq) => {
          if(typeof(kq) === 'object'){
            console.log(kq);
            if(kq.maLoaiNguoiDung === "QuanTri"){
              this.cookie.setCookie('token', kq.accessToken);
              this.cookie.setCookie('taikhoan', kq.taiKhoan);

              alert('Đăng Nhập Thành Công');
              this.formDangNhap.reset();
              this.router.navigate(['/qluser']);
            }else{
              alert('Tai khoan Admin chua dung');
              this.formDangNhap.reset();
            }
          }
        },
        (error) => {
          alert('Tai khoan hoac mat khau chua dung')
          this.formDangNhap.reset();
        }
      )
  }
  ngOnInit(): void {
    this.formDangNhap = new FormGroup({
      'taiKhoan' : new FormControl(null, Validators.required),
      'matKhau': new FormControl(null,  Validators.required),
    });
  }
}
