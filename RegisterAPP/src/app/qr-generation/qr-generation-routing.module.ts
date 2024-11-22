import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrGenerationPage } from './qr-generation.page';

const routes: Routes = [
  {
    path: '',
    component: QrGenerationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrGenerationPageRoutingModule {}
