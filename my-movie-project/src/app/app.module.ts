import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// MDB Angular Free
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { AdminModule } from './admin/admin.module';

//Interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercep } from './interceptor/token-interceptor';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrangChuModule,
    AdminModule,
    RouterModule,
  ],
  providers: [
    //Interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercep,
      multi: true
    }
    //Interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
