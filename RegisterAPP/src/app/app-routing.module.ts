import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { TeacherGuard } from './guards/teacher.guard';
import { StudentGuard } from './guards/student.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio-main',  // Redirige a la página de login
    pathMatch: 'full'
  },
  {
    path: 'inicio-main',
    loadChildren: () => import('./inicio-main/inicio-main.module').then(m => m.InicioMainPageModule) // Página de login
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) // Página de login
  },
  {
    path: 'assistance',
    loadChildren: () => import('./assistance/assistance.module').then(m => m.AssistancePageModule) // Página de login
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) // Página de registro
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) // Página de recuperación de contraseña
  },
  {
    path: 'credential',
    loadChildren: () => import('./credential/credential.module').then( m => m.CredentialPageModule)
  },
  
  // Definir las rutas para los dashboards sin usar el guard
  {
    path: 'teacher-dashboard',
    loadChildren: () => import('./teacher-dashboard/teacher-dashboard.module').then(m => m.TeacherDashboardPageModule),
    canActivate: [RoleGuard],
    data: { roles: ['teacher', 'admin'] } // Página para docente
  },
  {
    path: 'student-dashboard',
    loadChildren: () => import('./student-dashboard/student-dashboard.module').then(m => m.StudentDashboardPageModule),
    canActivate: [RoleGuard],
    data: { roles: ['student', 'admin'] } // Página para alumno
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule),
    canActivate: [RoleGuard],
    data: { roles: ['admin'] } // Página para admin
  },
  {
    path: 'forbidden',
    loadChildren: () => import('./forbidden/forbidden.module').then( m => m.ForbiddenPageModule)
  },
  {
    path: 'credential',
    loadChildren: () => import('./credential/credential.module').then( m => m.CredentialPageModule),
    canActivate: [RoleGuard],
    data: { roles: ['student', 'admin'] }
  },
  {
    path: 'qr-generation',
    loadChildren: () => import('./qr-generation/qr-generation.module').then( m => m.QrGenerationPageModule),
    canActivate: [RoleGuard],
    data: { roles: ['teacher', 'admin'] }
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule),
    canActivate: [RoleGuard],
    data: { roles: ['teacher', 'admin'] }
  },
  {
    path: 'attendance-check',
    loadChildren: () => import('./attendance-check/attendance-check.module').then( m => m.AttendanceCheckPageModule),
    canActivate: [RoleGuard],
    data: { roles: ['student', 'admin'] }
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'teacher-schedule',
    loadChildren: () => import('./teacher-schedule/teacher-schedule.module').then( m => m.TeacherSchedulePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
