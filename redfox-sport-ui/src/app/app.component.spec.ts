import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NbLayoutModule, NbSidebarModule, NbThemeModule, NbMenuModule, NbUserModule, NbIconModule, NbActionsModule } from '@nebular/theme';
import { HeaderComponent } from './core/components/header/header.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PagesModule } from './pages/pages.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NbLayoutModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbUserModule,
        NbIconModule,
        NbActionsModule,
        NbEvaIconsModule,
        PagesModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
