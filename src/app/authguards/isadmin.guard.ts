import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

export const isadminGuard: CanActivateFn = (route, state) => {
  // Retrieve the Router instance using injection
  const router = inject(Router);

  // Checks if the token from the localStorage has "admin" claim
  function hasClaim(admin: string) {
    let item = localStorage.getItem('ACCESS_TOKEN');
    // Checks if the token exists then decode it
    if (item !== null) {
      let jwtPayload = jwtDecode(item) as any;
      console.log(jwtPayload);
      return true;
    }
    return false;
  }

  // Allows access if true
  if (localStorage.getItem('ACCESS_TOKEN') && hasClaim('admin')) {
    return true;
  }

  // Redirect if the user doesnt have the token or claim
  router.navigateByUrl('/auth/login');
  return false;
};
