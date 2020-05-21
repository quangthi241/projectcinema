import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoviesService1 } from './upcoming-movie.servie';

@Component({
  selector: 'app-upcoming-movie',
  templateUrl: './upcoming-movie.component.html',
  styleUrls: ['./upcoming-movie.component.scss']
})
export class UpcomingMovieComponent implements OnInit,AfterViewInit {
  movielist = [];
  constructor(private movie: MoviesService1) { }
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit(): void {
    this.movie.LayDanhSachPhim().subscribe(
      (kq) => {
        this.movielist = kq.items
        this.slides = this.chunk(this.movielist , 3);
      },
      err => {
        console.log(err);
      }
    )
  }

  ngAfterViewInit(): void{}
}
