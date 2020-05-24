import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { CookieAuth } from '../cookie-service/cookie.service';

// MDB Angular Free
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { QuanLyNguoiDungComponent } from './quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './quanlyphim/quanlyphim.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes =[
  { path: 'qluser',canActivate:[LoginGuard], component: QuanLyNguoiDungComponent },
  { path: 'qlmovies',canActivate:[LoginGuard], component: QuanlyphimComponent },
]

@NgModule({
  declarations: [
    QuanLyNguoiDungComponent,
    QuanlyphimComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    WavesModule,
    IconsModule,
    MDBBootstrapModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    QuanLyNguoiDungComponent,
    QuanlyphimComponent
  ],
  providers: [
    CookieAuth,
  ]
})
export class AdminModule { }
