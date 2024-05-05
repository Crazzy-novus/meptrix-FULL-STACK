import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authguardGuard: CanActivateFn = (route, state) => {
const router = inject(Router);

if (typeof window !== 'undefined'){
    const userId = sessionStorage.getItem('userId');
    console.log(userId);
    if (userId !== null) {
      return true;
    }

    router.navigate(['/login']);
    return false;
}
return false;
};
