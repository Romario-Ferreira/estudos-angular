import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, CanDeactivateFn} from '@angular/router';
import { AuthService } from './login/auth.service';
import { CursosFormComponent } from './cursos/cursos-form/cursos-form.component';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    return inject(AuthService).isAuthenticated || inject(Router).navigate(['/login']);
}

export const deactiveGuard: CanDeactivateFn<CursosFormComponent> = (
  component: CursosFormComponent
) => {
    return component.canDeactivate() || confirm('Há mudanças não salvas, deseja sair?')
  }
