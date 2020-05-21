import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies-currently-playing/movies-playing.servie';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  public MaPhim: string;
  public ttp: any;
  public trailerctp: string;
  public loading = false;
  public ngxLoadingAnimationTypes;
  constructor(private activate:ActivatedRoute, private phimSV: MoviesService) { }

  ngOnInit(): void {
    this.loading = true;
      this.activate.params.pipe(
        switchMap(kq => {
          this.MaPhim = kq.maphim;
          return this.phimSV.LayChiTietPhim(this.MaPhim);
        })
      ).subscribe(
        (kq) => {
          this.ttp = kq;
          this.trailerctp = this.ttp.trailer;
          // console.log(this.MaPhim);
        })

  }

  ngAfterViewInit(): void{
  }

  ngOnDestroy(): void{
    location.reload()
  }
}
