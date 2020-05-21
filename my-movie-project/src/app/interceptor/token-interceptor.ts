import {CookieAuth} from '../cookie-service/cookie.service'
import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class TokenIntercep implements HttpInterceptor{

  constructor(private cookie: CookieAuth){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let clone: HttpRequest<any>;
    clone = request.clone({
      setHeaders: {
        'Accept': `application/json`,
        'Content-Type': `application/json`
      }
    });

    if(this.cookie.isHaveToken){
      var token = this.cookie.getToken()
      clone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true
      });
    }

    return next.handle(clone);
  }
}
