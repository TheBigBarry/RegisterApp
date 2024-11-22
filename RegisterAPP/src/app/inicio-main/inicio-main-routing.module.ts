import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioMainPage } from './inicio-main.page';

const routes: Routes = [
  {
    path: '',
    component: InicioMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioMainPageRoutingModule {}
