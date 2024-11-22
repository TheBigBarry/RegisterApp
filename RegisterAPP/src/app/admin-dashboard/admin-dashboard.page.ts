import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

// Definir tipo de roles para que sea aceptado por TypeScript
type Role = 'admin' | 'teacher' | 'student';
import { User } from '../models/user';  // Asegúrate de importar el modelo User

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  users: User[] = [];  // Cambia el tipo a User[] para trabajar con el modelo User

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Cargar usuarios
    this.authService.getAllUsers().subscribe(users => {
      this.users = users;  // Si 'users' ya es un array de tipo User[], asignalo directamente
    });
  }

  updateRole(uid: string, newRole: Role) {
    this.authService.updateUserRole(uid, newRole).then(() => {
      console.log('Rol actualizado');
      // Después de actualizar el rol, puedes recargar la lista de usuarios si es necesario
      this.loadUsers();  // Esto recargará los usuarios después de actualizar el rol
    }).catch(error => {
      console.error('Error al actualizar el rol:', error);
    });
  }
  
  // Método para recargar los usuarios (si necesitas refrescar la lista después de cambiar el rol)
  loadUsers() {
    this.authService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  // Método para cerrar sesión
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }
}
