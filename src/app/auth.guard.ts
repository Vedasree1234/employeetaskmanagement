import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  if(typeof sessionStorage !== 'undefined' && sessionStorage.getItem('emailid'))
  {
   return true;
  }
  else{
   const router=inject(Router)
   router.navigate(['login'])
   return false;
  }

};
