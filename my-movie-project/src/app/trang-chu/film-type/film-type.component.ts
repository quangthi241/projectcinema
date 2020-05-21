import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-film-type',
  templateUrl: './film-type.component.html',
  styleUrls: ['./film-type.component.scss']
})
export class FilmTypeComponent implements OnInit {
  showOff: boolean= true;
  constructor() { }
  playing(){
    this.showOff = true;
  };
  upcoming(){
    this.showOff = false;
  };
  ngOnInit(): void {
  }
}
