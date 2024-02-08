import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of, delay, map } from 'rxjs';

export const pokemonGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const dayofWeek = new Date().getDay();

  if (dayofWeek===0){
    router.navigateByUrl('/pokemon/notfound');
    return false;
  }

  const delay_ = dayofWeek === 6 ? 5000 : 2000;
  return of(true).pipe(
    delay(delay_),
    map(()=>true)
  )
};
