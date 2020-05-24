import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoviesService } from '../movies-currently-playing/movies-playing.servie';
import { DatveService } from './datve.service';
import { CookieAuth } from 'src/app/cookie-service/cookie.service';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit, AfterViewInit {
  public loading = false;
  public seatList: any[];

  // <---thong tin dat ve gui len server
  public maLichChieu: string;
  public danhSachVe: any[];
  public taiKhoan: string;
  // thong tin dat ve gui len server--->

  constructor(
    private apidatve: DatveService,
    private activatedRoute: ActivatedRoute,
    private phimSV: MoviesService,
    private cookietk: CookieAuth,
    ) {
    }

  LayTaiKhoanNguoiDung(){
    let nguoiDungHienTai = this.cookietk.isHaveToken();
    this.taiKhoan = this.cookietk.getTaiKhoan();
    if(nguoiDungHienTai != false){
      if(this.danhSachVe.length >= 1 ){
        alert('Chọn ghế thành công vui lòng đặt vé');
        return nguoiDungHienTai;
      }else{
        alert('Vui long chon ghe');
      }
    }else{
      alert('Vui lòng đăng nhập để chọn ghế');
      return false;
    }
  }

  DatVe(){
    let nguoiDungHienTai = this.cookietk.isHaveToken();
    let ve:{maLichChieu: string, danhSachVe:any[], taiKhoanNguoiDung: string} = {
      maLichChieu: this.maLichChieu,
      danhSachVe: this.danhSachVe,
      taiKhoanNguoiDung: this.taiKhoan,
    }

    if(nguoiDungHienTai == true){
      if(this.danhSachVe.length >= 1 ){
        this.apidatve.DatVe(ve).subscribe(
          (kq) => {
            console.log(kq);
            console.log(ve);
            alert('Đặt vé thành công')
            location.reload();
          },
          (err) => {
            console.log(err.error);
            alert('Dat ve that bai xin hay thu lai')
          }
        )
      }else{
        alert('Vui lòng chọn ghế trước khi đặt vé')
      }
    }else{
      alert('Vui lòng đăng nhập để đặt vé');
    }
  }

  nhanGheInfo(gheInfo){
    this.danhSachVe = gheInfo;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (kq) => {
        console.log(kq);
        this.maLichChieu = kq.maLichChieu;
        this.phimSV.LayChiTietPhongVe(this.maLichChieu).subscribe(
          (kq1) => {
            // console.log(kq1);
            this.seatList = kq1.danhSachGhe;
          }
        )
      },
      (error) => {
        console.log(error);
      }
    )
      this.loading = true;
  }

  ngAfterViewInit(): void{
    this.loading = false;
  }
}
