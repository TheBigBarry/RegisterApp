import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: 'attendance.page.html',
  styleUrls: ['attendance.page.scss'],
})
export class AttendancePage {
  qrData: string = 'http://localhost:8100/attendance-check'; // Cambia esta URL por la que quieras mostrar
}
