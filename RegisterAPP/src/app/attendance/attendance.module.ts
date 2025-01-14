import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QRCodeModule } from 'angularx-qrcode';

import { IonicModule } from '@ionic/angular';

import { AttendancePageRoutingModule } from './attendance-routing.module';

import { AttendancePage } from './attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendancePageRoutingModule,
    QRCodeModule
  ],
  declarations: [AttendancePage]
})
export class AttendancePageModule {}
