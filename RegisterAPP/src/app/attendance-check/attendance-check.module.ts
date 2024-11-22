import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceCheckPageRoutingModule } from './attendance-check-routing.module';

import { AttendanceCheckPage } from './attendance-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceCheckPageRoutingModule
  ],
  declarations: [AttendanceCheckPage]
})
export class AttendanceCheckPageModule {}
