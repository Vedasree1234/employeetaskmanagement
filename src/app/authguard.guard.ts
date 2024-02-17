import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authguardGuard: CanActivateFn = (route) => {
  if(sessionStorage.getItem('emailid'))
   {
    return true;
   }
   else{
    const route=inject(Router)
    route.navigate(['about-tasks'])
    return false;
   } 
  
};
