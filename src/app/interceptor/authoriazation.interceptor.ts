import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable()
export class TokenExpirationInterceptor implements HttpInterceptor {

  constructor(
      private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403 && localStorage.getItem('ACCESS_TOKEN')) {
            const token = localStorage.getItem('ACCESS_TOKEN');
            if (this.isTokenExpired(token)) {

              localStorage.removeItem('ACCESS_TOKEN');
              alert('Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an.');

            }

          }
          return throwError(error);
        })
    );
  }

  isTokenExpired(token: string | null): boolean {
    this.router.navigateByUrl('auth/login')
    return false;
  }
}

export class AuthorizationInterceptor {
}
