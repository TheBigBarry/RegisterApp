import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Assistance } from '../models/assistance'; // Modelo de la asistencia
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssistanceService {
  private collectionName = 'assistances'; // Nombre de la colección en Firebase

  constructor(private firestore: AngularFirestore) {}

  // Método para obtener todas las asistencias desde Firebase
  getAssistances(): Observable<Assistance[]> {
    return this.firestore.collection<Assistance>(this.collectionName).valueChanges();
  }

  // Método para agregar un registro de asistencia a Firebase
  addAssistance(assistance: Assistance) {
    return this.firestore.collection<Assistance>(this.collectionName).add(assistance);
  }

  // Método para eliminar un registro de asistencia por su ID
  deleteAssistance(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
