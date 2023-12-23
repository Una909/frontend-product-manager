import { HttpInterceptorFn } from '@angular/common/http';

// Define an HTTP interceptor for authorization
export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  // Checking if there's an access token in local storage
  if (localStorage.getItem("ACCESS_TOKEN")) {
    // If the access token exists, attach it to the request headers
    return next(req.clone({
      setHeaders: {
        'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
      }
    }));
  }
  // If there's no access token, proceed with the original request
  return next(req);
};
