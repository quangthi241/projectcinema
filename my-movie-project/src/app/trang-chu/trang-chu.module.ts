import { PipesModule } from './../pipes/pipes.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes  } from 'ngx-loading';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { FilmTypeComponent } from './film-type/film-type.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';
import { MoviesCurrentlyPlayingComponent } from './movies-currently-playing/movies-currently-playing.component';
import { FormComponent } from './form-themnguoidung/form.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { SeatComponent } from './seat/seat.component';
import { EditSeatListComponent } from './edit-seat-list/edit-seat-list.component';
import { FormDangnhapComponent } from './form-dangnhap/form-dangnhap.component';
import { NguoidungService } from './form-themnguoidung/nguoidung.service';
import { MoviesService } from './movies-currently-playing/movies-playing.servie';
import { DatveComponent } from './datve/datve.component';
import { TokenIntercep } from '../interceptor/token-interceptor';
import { CookieAuth } from '../cookie-service/cookie.service';
import { FormDangkyComponent } from './form-dangky/form-dangky.component';
import { MoviesService1 } from './upcoming-movie/upcoming-movie.servie';
import { IndexHomeComponent } from './index-home/index-home.component';

const routes: Routes =[
  {path: '',component: TrangchuComponent, children:[
    {path: '',component: IndexHomeComponent},
    {path: 'dangnhap',component: FormDangnhapComponent},
    {path: 'dangky',component: FormDangkyComponent},
    {path: 'chitiet/:maphim',component: MovieDetailsComponent},
    {path: 'datve/:maLichChieu', component: DatveComponent}
  ]},
]

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    MovieListComponent,
    MovieDetailsComponent,
    ContactComponent,
    FooterComponent,
    TrangchuComponent,
    FilmTypeComponent,
    UpcomingMovieComponent,
    MoviesCurrentlyPlayingComponent,
    FormComponent,
    SeatListComponent,
    SeatComponent,
    EditSeatListComponent,
    FormDangnhapComponent,
    DatveComponent,
    FormDangkyComponent,
    IndexHomeComponent
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    MovieListComponent,
    MovieDetailsComponent,
    ContactComponent,
    FooterComponent,
    TrangchuComponent,
    FilmTypeComponent,
    UpcomingMovieComponent,
    MoviesCurrentlyPlayingComponent,
    FormComponent,
    SeatListComponent,
    SeatComponent,
    EditSeatListComponent,
    FormDangnhapComponent,
    DatveComponent,
    FormDangkyComponent,
    IndexHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PipesModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes),
    NgxLoadingModule.forRoot({
        animationType: ngxLoadingAnimationTypes.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
    })
  ],
  providers: [
    NguoidungService,
    MoviesService,
    MoviesService1,
    CookieAuth,
  ]
})
export class TrangChuModule { }
