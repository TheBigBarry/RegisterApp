import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioMainPageRoutingModule } from './inicio-main-routing.module';

import { InicioMainPage } from './inicio-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioMainPageRoutingModule
  ],
  declarations: [InicioMainPage]
})
export class InicioMainPageModule {}
