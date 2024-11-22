import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGenerationPageRoutingModule } from './qr-generation-routing.module';

import { QrGenerationPage } from './qr-generation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGenerationPageRoutingModule
  ],
  declarations: [QrGenerationPage]
})
export class QrGenerationPageModule {}
