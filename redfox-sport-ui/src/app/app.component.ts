import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { SIDE_BAR_ITEMS } from './core/models/constants/side-bar-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sideBarItems: NbMenuItem[] = SIDE_BAR_ITEMS;
}
