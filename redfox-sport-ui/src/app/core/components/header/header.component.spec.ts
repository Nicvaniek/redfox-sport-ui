import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NbSidebarService, NbUserModule, NbIconModule, NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let sideBarService: jasmine.SpyObj<NbSidebarService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [NbUserModule, NbIconModule, NbActionsModule, NbEvaIconsModule],
      providers: [{ provide: NbSidebarService, useValue: jasmine.createSpyObj('NbSidebarService', ['toggle']) }]
    })
      .compileComponents();
    sideBarService = TestBed.inject(NbSidebarService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
