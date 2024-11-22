import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherSchedulePageRoutingModule } from './teacher-schedule-routing.module';

import { TeacherSchedulePage } from './teacher-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherSchedulePageRoutingModule
  ],
  declarations: [TeacherSchedulePage]
})
export class TeacherSchedulePageModule {}
