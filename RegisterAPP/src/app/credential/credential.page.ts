import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.page.html',
  styleUrls: ['./credential.page.scss'],
})
export class CredentialPage implements OnInit {

  student: any = {};  // Aquí declaramos la propiedad `student` para almacenar los datos del usuario

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Asegúrate de que los datos del usuario estén disponibles
    const userData = JSON.parse(localStorage.getItem('user')!);
    if (userData) {
      this.student = userData; // Asigna los datos del usuario a la propiedad `student`
      console.log('Datos del usuario:', this.student);
    }
  }
}
