import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Platform } from '@ionic/angular'; // Importar Platform para verificar el entorno

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
})
export class StudentDashboardPage {
  constructor(
    private authService: AuthService,
    private barcodeScanner: BarcodeScanner,
    private platform: Platform // Inyectar Platform
  ) {}

  logout() {
    this.authService.logout();
  }

  escanearQR() {
    if (!this.platform.is('cordova') && !this.platform.is('capacitor')) {
      // Si no está en un entorno nativo, mostrar un mensaje de advertencia
      alert('El escáner QR no está disponible en el navegador.');
      return;
    }

    // Si está en un entorno nativo, proceder con el escaneo
    this.barcodeScanner.scan().then(
      (barcodeData) => {
        if (!barcodeData.cancelled) {
          alert(`QR Escaneado: ${barcodeData.text}`);
        }
      },
      (err) => {
        alert(`Error: ${err}`);
      }
    );
  }
}
