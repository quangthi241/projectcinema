import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  @Input() item;
  @Output() eventClickseat = new EventEmitter <boolean>();
  clickSeat:boolean = false;
  constructor() { }
  onClick(){
    this.clickSeat = !this.clickSeat;
    this.eventClickseat.emit(this.clickSeat);
  }
  ngOnInit(): void {
  }

}
