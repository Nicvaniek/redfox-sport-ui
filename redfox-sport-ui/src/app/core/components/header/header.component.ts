import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  private readonly SIDE_BAR = 'menu-sidebar';

  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit() {}

  toggleSidebar(): boolean {
    // TDOD: Add logic here to fit layout content (check ngx-admin)
    this.sidebarService.toggle(true, this.SIDE_BAR);
    return false;
  }

}
