import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungService } from './quanlynguoidung.service';
import { NguoiDung } from 'src/app/models/nguoidung';
import { CookieAuth } from 'src/app/cookie-service/cookie.service';

@Component({
  selector: 'app-quanlynguoidung',
  templateUrl: './quanlynguoidung.component.html',
  styleUrls: ['./quanlynguoidung.component.scss'],
  providers: [NguoidungService]
})
export class QuanLyNguoiDungComponent implements OnInit, AfterViewInit {
  @ViewChild('formAddUser') formAdd: NgForm;
  mangNguoiDungDK: NguoiDung[] = [];
  public query: string; //tên biến để lọc tên
  public capNhat: boolean = false;
  public loading: boolean = false;
  constructor(private service: NguoidungService, private cookie: CookieAuth) { }

  clickForm(value: NguoiDung){
    if(this.capNhat != true){
      this.service.ThemNguoiDung(value).subscribe(
        (kq) => {
          console.log(kq);
          alert('Đã thêm người dùng thành công')
          this.getDanhSachNguoiDung();
        },
        (error) => {
          console.log(error);
          alert('Thêm người dùng thất bại : ' + error.error)
        }
      )
    }else{
      this.service.SuaThongTinNguoiDung(value).subscribe(
        (kq) => {
          console.log(kq);
          alert('Cập nhật thành công')
          this.getDanhSachNguoiDung();
        },
        (error) => {
          console.log(error);
          alert('Cập nhật thất bại')
        }
      )
      this.capNhat = false;
    }
    this.formAdd.reset();
  }

  cancel(){
    this.formAdd.reset();
  }

  xoaToken(){
    this.cookie.xoaToken();
    this.cookie.xoaMaLoaiNguoiDung();
    this.cookie.xoaTaiKhoan();
    location.reload();
  }

  Edit(eDit){
    let taikhoan = eDit.getAttribute('data-taikhoan');
    let password = eDit.getAttribute('data-matkhau');
    let hoten = eDit.getAttribute('data-hoten');
    let email = eDit.getAttribute('data-email');
    let sdt = eDit.getAttribute('data-sdt');
    let maNhom = eDit.getAttribute('data-manhom');
    let maloainguoidung = eDit.getAttribute('data-maloainguoidung');
    this.formAdd.setValue({
      taiKhoan: taikhoan,
      matKhau: password,
      hoTen: hoten,
      email: email,
      soDt: sdt,
      maNhom: maNhom,
      maLoaiNguoiDung: maloainguoidung
    })
    this.capNhat = true;
  }

  ngOnInit(): void {
    this.loading = true;
    this.getDanhSachNguoiDung();
  }

  ngAfterViewInit(): void{
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
      alert(err.error);
    })
  }
}
