import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherSchedulePage } from './teacher-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSchedulePageRoutingModule {}
