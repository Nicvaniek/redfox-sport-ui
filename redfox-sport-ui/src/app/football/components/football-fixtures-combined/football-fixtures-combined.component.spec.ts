import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballFixturesCombinedComponent } from './football-fixtures-combined.component';
import { NbCardModule, NbListModule, NbIconModule, NbCalendarModule } from '@nebular/theme';
import { CoreModule } from 'src/app/core/core.module';

describe('FootballFixturesCombinedComponent', () => {
  let component: FootballFixturesCombinedComponent;
  let fixture: ComponentFixture<FootballFixturesCombinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballFixturesCombinedComponent ],
      imports: [NbCardModule, NbListModule, CoreModule, NbIconModule, NbCalendarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballFixturesCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
