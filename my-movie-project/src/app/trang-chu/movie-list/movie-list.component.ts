import { Movies } from './../movies-currently-playing/movie';
import { Component, OnInit , Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  @Input() movie;
  movieInfo:Movies;
  constructor() { }

  ngOnInit(): void {
    this.movieInfo = {...this.movie}
  }

}
