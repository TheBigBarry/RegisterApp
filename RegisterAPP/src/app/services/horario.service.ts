import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Class } from '../models/class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  private collectionName = 'classes'; // Nombre de la colección en Firebase

  constructor(private firestore: AngularFirestore) {}

  // Método para obtener las clases desde Firebase
  getLocal(): Observable<Class[]> {
    return this.firestore.collection<Class>(this.collectionName).valueChanges();
  }

  // Método para agregar una clase a Firebase
  addClass(clase: Class) {
    return this.firestore.collection<Class>(this.collectionName).add(clase);
  }

  // Método para eliminar una clase por su ID
  deleteClass(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
