import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.page.html',
  styleUrls: ['./teacher-dashboard.page.scss'],
})
export class TeacherDashboardPage {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
