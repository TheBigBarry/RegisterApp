import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const role = await this.authService.getUserRole();
    if (role === 'teacher') {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}
