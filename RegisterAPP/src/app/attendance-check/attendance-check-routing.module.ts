import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceCheckPage } from './attendance-check.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceCheckPageRoutingModule {}
