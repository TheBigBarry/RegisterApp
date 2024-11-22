export interface User {
  uid?: string;
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
  photoURL?: string;
emailVerified: boolean;
  role?: 'admin' | 'teacher' | 'student';  // Roles posibles: admin, teacher, student
}
