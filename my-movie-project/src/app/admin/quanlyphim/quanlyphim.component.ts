import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from './quanlyphim.service';
import { CookieAuth } from 'src/app/cookie-service/cookie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-quanlyphim',
  templateUrl: './quanlyphim.component.html',
  styleUrls: ['./quanlyphim.component.scss'],
  providers: [MovieService]
})
export class QuanlyphimComponent implements OnInit, AfterViewInit {
  @ViewChild('formAddMovie') formAdd: NgForm;
  mangPhim: Movie[] = [];
  public query: string; //tên biến để lọc tên
  public capNhat: boolean = false;
  public loading: boolean = false;
  constructor(private service: MovieService, private cookie: CookieAuth) { }

  clickForm(value: Movie){
    if(this.capNhat != true){
      this.service.ThemPhim(value).subscribe(
        (kq) => {
          console.log(kq);
          alert('Thêm phim thành công')
          this.getDanhSachPhim();
        },
        (error) => {
          console.log(error);
          alert('Thêm phim thất bại')
        }
      )
    }else{
      this.service.SuaThongTinPhim(value).subscribe(
        (kq) => {
          console.log(kq);
          alert('Cập nhật thành công')
          this.getDanhSachPhim();
        },
        (error) => {
          console.log(error);
          alert(error.error)
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
    let maPhim = eDit.getAttribute('data-maPhim');
    let tenPhim = eDit.getAttribute('data-tenPhim');
    let biDanh = eDit.getAttribute('data-biDanh');
    let trailer = eDit.getAttribute('data-trailer');
    let hinhAnh = eDit.getAttribute('data-hinhAnh');
    let moTa = eDit.getAttribute('data-moTa');
    let maNhom = eDit.getAttribute('data-manhom');
    let ngayKhoiChieu = eDit.getAttribute('data-ngayKhoiChieu');
    let danhGia = eDit.getAttribute('data-danhGia');
    this.formAdd.setValue({
      maPhim: maPhim,
      tenPhim: tenPhim,
      biDanh: biDanh,
      trailer: trailer,
      hinhAnh: hinhAnh,
      moTa: moTa,
      maNhom: maNhom,
      ngayKhoiChieu: ngayKhoiChieu,
      danhGia: danhGia
    })
    this.capNhat = true;
  }

  CapNhat(value: Movie){
    this.service.SuaThongTinPhim(value).subscribe(
      (kq) => {
        alert('Cập nhật thành công')
      },
      (err) => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
    this.loading = true;
    this.getDanhSachPhim()
  }

  ngAfterViewInit(): void{
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  getDanhSachPhim(){
    this.service.LayDanhSachPhim().subscribe(
      (kq:any) => {
        this.mangPhim = kq;
        console.log(kq);
      }
    )
  }

  deletePhim(maPhim){
    this.service.XoaPhim(maPhim).subscribe(
      kq => {
      alert(`Phim: ${maPhim} ${kq}`)
      this.getDanhSachPhim()
    }, err => {
      console.log('err:', err)
      alert(err.error);
    })
    console.log(maPhim);
  }
}
