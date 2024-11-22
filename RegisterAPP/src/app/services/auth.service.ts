import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  errorMessage: string = '';

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', 'null');
        this.userData = null;
      }
    });
  }

  setUserData(user: any, role: 'admin' | 'teacher' | 'student', firstName: string, lastName: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      firstName: firstName,
      lastName: lastName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      role: role
    };
    return userRef.set(userData, { merge: true });
  }
  

  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(result => {
        return this.afs.doc(`user/${result.user?.uid}`).get().toPromise().then(doc => {
          if (doc.exists) {
            const userData = doc.data() as User;
            console.log('Datos del usuario:', userData); // Verifica que se obtienen correctamente los datos
  
            // Asigna los datos al localStorage o algún servicio centralizado
            this.userData = userData; // Aquí asignas todos los datos del usuario
  
            // Guarda en localStorage si es necesario
            localStorage.setItem('user', JSON.stringify(userData)); // Almacena los datos completos
            
            // Redirigir según el rol (si es necesario)
            if (userData.role === 'admin') {
              this.router.navigate(['admin-dashboard']);
            } else if (userData.role === 'teacher') {
              this.router.navigate(['teacher-dashboard']);
            } else {
              this.router.navigate(['student-dashboard']);
            }
          } else {
            throw new Error('Usuario no encontrado en Firestore');
          }
        });
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        throw error; // Propaga el error al componente
      });
  }
  
  
  

  getUserRole(): Promise<string | null> {
    const user = JSON.parse(localStorage.getItem('user')!);
    return new Promise((resolve, reject) => {
      if (user && user.uid) {
        this.afs.doc(`user/${user.uid}`).get().subscribe(doc => {
          if (doc.exists) {
            const data = doc.data() as User;
            console.log('Rol recuperado:', data.role);  // Verifica que el rol se lee correctamente
            resolve(data.role);
          } else {
            resolve(null);
          }
        }, reject);
      } else {
        resolve(null);
      }
    });
  }
  

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false;
  }

  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }

  // Obtener todos los usuarios
  getAllUsers(): Observable<User[]> {
    return this.afs.collection('user').valueChanges() as Observable<User[]>;
  }

  // Actualizar el rol de un usuario
  updateUserRole(uid: string, newRole: 'admin' | 'teacher' | 'student'): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${uid}`);
    return userRef.update({ role: newRole });
  }

  // Registrar un nuevo usuario
  register(email: string, password: string, firstName: string, lastName: string, role: 'admin' | 'teacher' | 'student'): Promise<void> {
    console.log('Valores enviados al registrar:', { email, password, firstName, lastName, role }); // Aquí validas los datos
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        return this.setUserData(result.user, role, firstName, lastName); // Asegúrate de pasar los valores
      })
      .catch(error => {
        console.error('Error al registrar usuario:', error);
        this.errorMessage = 'Hubo un problema al registrar el usuario';
      });
  }
  
  

  // Obtener los datos del usuario local
  getLocalUserData(): { firstName?: string; lastName?: string; role?: string; email?: string } {
    const localData = JSON.parse(localStorage.getItem('user')!);
    console.log('Datos recuperados de localStorage:', localData); // Verifica que los datos estén correctos
    return {
      firstName: localData?.firstName || 'Nombre no registrado',
      lastName: localData?.lastName || 'Apellido no registrado',
      role: localData?.role || 'Rol no definido',
      email: localData?.email || 'Correo no disponible',
    };
  }
  
  

}
