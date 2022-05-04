import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, take, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  /*  POST MAN:
  tab: Header 
  Key: Authorization
  value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTXVoYW1tYWQgQmlsYWwiLCJpZCI6IjQzMjEiLCJpYXQiOjE2Mzc0NzIwODQsImV4cCI6MTYzNzQ3MjIzNH0.GzeqQtdJ_7X5pP2w7Hx8ra6sF8PVoVpBYXGupxBsV_Q*/

  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interception in progress");
    const token: string = localStorage.getItem('token');
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    })
    // content-Type: 'application/json'
    // req = req.clone({ header: req.headers.set('Authorization', 'Bearer ' + token) })
    // req = req.clone({ header: req.header.set('content-Type', 'application/json') })
    // req = req.clone({ header: req.header.set('Accept', 'application/json') })

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        //401 UNAUTHORIZED - SECTION 2
        if (error && error.status === 401) {
          console.log("ERROR 401 UNAUTHORIZED")
        }
        const err = error.error.message || error.statusText;
        return throwError(error);
      })
    );
  }
}

