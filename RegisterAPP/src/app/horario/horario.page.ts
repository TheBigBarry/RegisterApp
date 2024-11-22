import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../services/horario.service';
import { Class } from '../models/class';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  clases: Class[] = []; // Almacenará las clases obtenidas de Firebase

  constructor(private horarioService: HorarioService) {}

  ngOnInit() {
    this.obtenerClases(); // Llamamos a obtenerClases al iniciar la vista
  }

  // Método para obtener las clases de Firebase
  obtenerClases() {
    this.horarioService.getLocal().subscribe((data: Class[]) => {
      this.clases = data; // Asignamos los datos obtenidos a la variable `clases`
      console.log('Clases obtenidas de Firebase:', this.clases);
    });
  }
}
