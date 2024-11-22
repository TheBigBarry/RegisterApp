import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const allowedRoles = route.data['roles'] as Array<string>;
    const userRole = await this.authService.getUserRole();
  
    console.log('Rol de usuario:', userRole); // Verifica qué rol se está recuperando
  
    if (allowedRoles.includes(userRole)) {
      return true;
    } else {
      this.router.navigate(['/forbidden']); // Redirige si no está permitido
      return false;
    }
  }
}
