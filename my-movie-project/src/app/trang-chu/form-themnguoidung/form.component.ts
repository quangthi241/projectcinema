import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungService } from './nguoidung.service';
import { NguoiDung } from 'src/app/models/nguoidung';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [NguoidungService]
})
export class FormComponent implements OnInit {
  @ViewChild('formDangKy') formDK: NgForm;
  mangNguoiDungDK: NguoiDung[] = [];
  constructor(private service: NguoidungService) { }

  clickForm(value: NguoiDung){
    this.service.ThemNguoiDung(value).subscribe(
      (kq) => {
        console.log(kq);
        this.getDanhSachNguoiDung();
      },
      (error) => {
        console.log(error);
      }
    )
    this.formDK.reset();
  }
  capNhat(eDit){
    let taikhoan = eDit.getAttribute('data-taikhoan');
    let password = eDit.getAttribute('data-matkhau');
    let hoten = eDit.getAttribute('data-hoten');
    let email = eDit.getAttribute('data-email');
    let sdt = eDit.getAttribute('data-sdt');
    let maloainguoidung = eDit.getAttribute('data-maloainguoidung');
    this.formDK.setValue({
      taiKhoan: taikhoan,
      matKhau: password,
      hoTen: hoten,
      email: email,
      soDt: sdt,
      maLoaiNguoiDung: maloainguoidung
    })
  }
  ngOnInit(): void {
    this.getDanhSachNguoiDung()
  }

  getDanhSachNguoiDung(){
    this.service.LayDanhSachNguoiDung().subscribe(
      (kq:any) => {
        this.mangNguoiDungDK = kq;
        console.log(kq);
      }
    )
  }

  deleteTaiKhoan(thamso){
    var taiKhoan = thamso.getAttribute('data-taikhoan')
    this.service.XoaNguoiDung(taiKhoan).subscribe(kq => {
      alert(`Tài khoản: ${taiKhoan} ${kq}`)
      this.getDanhSachNguoiDung()
    }, err => {
      console.log('err:', err)
    })
  }
}
