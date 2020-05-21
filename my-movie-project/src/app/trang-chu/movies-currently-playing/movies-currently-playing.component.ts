import { Component, OnInit, AfterViewInit,  } from '@angular/core';
import { MoviesService } from './movies-playing.servie';


@Component({
  selector: 'app-movies-currently-playing',
  templateUrl: './movies-currently-playing.component.html',
  styleUrls: ['./movies-currently-playing.component.scss'],
  providers: [MoviesService]
})
export class MoviesCurrentlyPlayingComponent implements OnInit, AfterViewInit {
  movielist = [];
  constructor(private movie: MoviesService) { }
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

  ngAfterViewInit(): void{

  }
}
