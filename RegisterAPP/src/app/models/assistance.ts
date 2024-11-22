export interface Assistance {
    id: string; // Identificador único
    studentId: string; // ID del estudiante
    subject: string; // Materia del estudiante
    date: Date; // Fecha como objeto Date
    status: 'Asistió' | 'Ausente'; // Estado de la asistencia
    comments?: string; // Comentarios opcionales
  }
  