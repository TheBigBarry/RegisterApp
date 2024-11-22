import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.page.html',
  styleUrls: ['./teacher-schedule.page.scss'],
})
export class TeacherSchedulePage {
  horario = [
    { dia: 'Lunes', clase: 'Calidad de Software', tipo: 'Clase Práctica', hora: '08:30 - 11:20 hrs', ubicacion: 'SJ-L4' },
    { dia: 'Lunes', clase: 'Inglés Intermedio', tipo: 'Clase Teórica', hora: '11:30 - 12:50 hrs', ubicacion: 'SJ-511' },
    { dia: 'Martes', clase: 'Matemática Aplicada', tipo: 'Clase Práctica', hora: '13:00 - 14:20 hrs', ubicacion: 'SJ-L5' },
  ];

  groupedHorario = [];

  constructor(private toastController: ToastController) {
    this.groupHorario();
  }

  groupHorario() {
    const days = [...new Set(this.horario.map((clase) => clase.dia))];
    this.groupedHorario = days.map((dia) => ({
      dia,
      clases: this.horario.filter((clase) => clase.dia === dia),
    }));
  }

  async eliminarClase(clase) {
    const index = this.horario.indexOf(clase);
    if (index > -1) {
      this.horario.splice(index, 1);
      this.groupHorario();
      const toast = await this.toastController.create({
        message: 'Clase eliminada con éxito.',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }

  async agregarClase(dia: string) {
    const nuevaClase = {
      dia,
      clase: prompt('Nombre de la clase:'),
      tipo: prompt('Tipo de clase (teórica/práctica):'),
      hora: prompt('Hora de la clase:'),
      ubicacion: prompt('Ubicación de la clase:'),
    };

    if (nuevaClase.clase && nuevaClase.tipo && nuevaClase.hora && nuevaClase.ubicacion) {
      this.horario.push(nuevaClase);
      this.groupHorario();
      const toast = await this.toastController.create({
        message: 'Clase agregada con éxito.',
        duration: 2000,
        color: 'success',
      });
      toast.present();
    }
  }

  async guardarHorario() {
    const toast = await this.toastController.create({
      message: 'Horario guardado con éxito.',
      duration: 2000,
      color: 'primary',
    });
    toast.present();
  }
}
