import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbSidebarService, NbMenuService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  private readonly SIDE_BAR = 'menu-sidebar';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService
  ) { }

  ngOnInit() {
    this.setupSidebar();
  }

  private setupSidebar() {
    const largeScreen = 1200;
    const smallScreen = 480;

    this.menuService.onItemSelect()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < largeScreen && screenWidth > smallScreen) {
          this.sidebarService.compact(this.SIDE_BAR);
        } else if (screenWidth < smallScreen) {
          this.sidebarService.collapse(this.SIDE_BAR);
        }
      });
  }

  public toggleSidebar(): boolean {
    // TDOD: Add logic here to fit layout content (check ngx-admin)
    this.sidebarService.toggle(true, this.SIDE_BAR);
    return false;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
