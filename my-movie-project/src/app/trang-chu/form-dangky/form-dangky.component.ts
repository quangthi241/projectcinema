import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDung } from 'src/app/models/nguoidung';
import { NgForm } from '@angular/forms';
import { NguoidungService } from '../form-themnguoidung/nguoidung.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-form-dangky',
  templateUrl: './form-dangky.component.html',
  styleUrls: ['./form-dangky.component.scss']
})
export class FormDangkyComponent implements OnInit {
  @ViewChild('formDangKy') formDK: NgForm;
  mangNguoiDungDK: NguoiDung[] = [];
  constructor(private apidk: NguoidungService, private router: Router) { }
  dangKy(value){
    this.apidk.dangKy(value).subscribe(
      kq => {
        console.log(kq);
        alert('Đăng ký thành công')
        // this.formDK.reset();
        this.router.navigate(['/dangnhap']);
      },
      err => {
        alert(err.error)
      }
    )
  }
  ngOnInit(): void {
  }

}
