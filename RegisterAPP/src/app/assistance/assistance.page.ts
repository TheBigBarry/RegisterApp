import { Component, OnInit } from '@angular/core';
import { AssistanceService } from '../services/assistance.service';
import { Assistance } from '../models/assistance';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {
  assistances: Assistance[] = []; // Lista de asistencias

  constructor(private assistanceService: AssistanceService) {}

  ngOnInit() {
    // Cargar asistencias desde Firebase
    this.assistanceService.getAssistances().subscribe((data) => {
      this.assistances = data;
    });
  }

  addSampleAssistance() {
    const newAssistance: Assistance = {
      id: '12345', // Esto puede omitirse si Firebase genera automáticamente un ID
      studentId: '67890', // ID del estudiante (puedes cambiarlo por el real)
      subject: 'Materia', // Materia
      date: new Date(), // Fecha actual
      status: 'Asistió', // Estado ('Asistió' o 'Ausente')
      comments: 'Asistió puntualmente a la clase.', // Comentario opcional
    };
  
    this.assistanceService.addAssistance(newAssistance).then(() => {
      console.log('Asistencia agregada correctamente');
    });
  }  
  
}
