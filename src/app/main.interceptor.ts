import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzUwOTFkZTQzNjdjMDBkNzg3MjZjNWZkNmYyMjZjZSIsInN1YiI6IjYyOTRkNDgwYTQxMGM4MTVhNDAzOGM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OT7gm44VYdFO2BsP9jphtITrHlbrrIM9VooMkgMWLac'
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    })
    return next.handle(request)
  }
}
