import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

export class ExampleComponent {
  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    this.menuCtrl.open('menu1');
  }

}