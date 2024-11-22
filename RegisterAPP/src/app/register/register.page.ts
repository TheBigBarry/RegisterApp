import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerUser: any = {
    email: '',
    password: '',
    role: '',
    firstName: '',
    lastName: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit(): void { }

  async register(registerUser: any) {
    try {
      await this.authService.register(
        registerUser.email,
        registerUser.password,
        registerUser.firstName, // ← Ahora está en la posición correcta
        registerUser.lastName,
        registerUser.role // ← role al final
      );
      
      this.showSuccessToast();
      this.router.navigate(['/inicio-main']);
    } catch (error) {
      console.error("Error en el registro:", error);
      this.showErrorToast(error.message);
    }
  }

  async showSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Registro exitoso!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: `Error: ${message}`,
      duration: 2000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }
}
