import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Importa Router para la redirección

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginUser: any = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginUser: any) {
    if (!loginUser.email || !loginUser.password) {
      this.errorMessage = 'Por favor, complete todos los campos';
      return;
    }
  
    this.errorMessage = ''; // Resetea el mensaje antes de intentar el login
  
    this.authService.login(loginUser.email, loginUser.password)
      .then(() => {
        console.log('Inicio de sesión exitoso, redirigiendo...');
      })
      .catch((error: any) => {
        console.error('Error al iniciar sesión:', error);
  
        // Manejo de errores
        switch (error.code) {
          case 'auth/user-not-found':
            this.errorMessage = 'Usuario no encontrado. Verifique su correo.';
            break;
          case 'auth/wrong-password':
            this.errorMessage = 'Contraseña incorrecta. Intente nuevamente.';
            break;
          case 'auth/invalid-email':
            this.errorMessage = 'El formato del correo es incorrecto.';
            break;
          default:
            this.errorMessage = 'Error de inicio de sesión. Intente nuevamente.';
        }
      });
  }
  
}
