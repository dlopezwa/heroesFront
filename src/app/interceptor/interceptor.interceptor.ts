import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = sessionStorage.getItem('token');

    let req = request;

    if (token) {
      req = request.clone({
        headers: request.headers.set('authorization', token)
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.router.navigateByUrl('/error');
        return throwError(error);
      })
      // tap((res: any) => {
      //   if (res.headers.get('authorization') === token && location.pathname === '/login'){
      //     // this.router.navigateByUrl('/')
      //   }
      // })
    );
  }
}
