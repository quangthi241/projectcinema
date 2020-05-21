import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {SeatListComponent} from'../seat-list/seat-list.component';

@Component({
  selector: 'app-edit-seat-list',
  templateUrl: './edit-seat-list.component.html',
  styleUrls: ['./edit-seat-list.component.scss']
})
export class EditSeatListComponent implements OnInit {
  @ViewChild (SeatListComponent) forChild;
  @ViewChild ('title') titleHeading: ElementRef;
  constructor() { }
  onAddForChild(...thamSo: any[]){
    let gheDcThem = {
      SoGhe: thamSo[0],
      TenGhe: thamSo[1],
      Gia: thamSo[2],
      TrangThai: null
    }
    if(thamSo[3] === 'false'){
      gheDcThem.TrangThai = false;
    }else{
      gheDcThem.TrangThai = true;
    }
    console.log(gheDcThem);
    this.forChild.addseat(gheDcThem)
    this.titleHeading.nativeElement.innerHTML = "asd";
  }
  ngOnInit(): void {
  }

}
