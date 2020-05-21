import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss']
})
export class SeatListComponent implements OnInit {
  @Output() guiGheInfo = new EventEmitter<any[]>();
  @Input() seatList = [];
  soGheDadat: number = 0;
  soGheCOnLai: number = this.seatList.length;
  dsgdadat = [];
  constructor() { }
  changeValue(isadd: boolean, seat){
    //Tạo 1 obj vé để gửi lên server
    let ve:{maGhe: string, giaVe: number} = {
      maGhe: seat.maGhe,
      giaVe: seat.giaVe
    }
    if(isadd){
      this.dsgdadat.push(ve);
    }else{
      this.dsgdadat.forEach((item, index) => {
        if(item.maGhe === seat.maGhe) {
          this.dsgdadat.splice(index, 1);
        }
      })
    }
    this.soGheDadat = this.dsgdadat.length;
    this.soGheCOnLai = this.seatList.length - this.soGheDadat;
    console.log(this.dsgdadat);
    this.guiGheInfo.emit(this.dsgdadat);

  }
  // addseat(gheDcThem){
  //   this.seatList.push(gheDcThem);
  // }

  ngOnInit(): void {}
}
