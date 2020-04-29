import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballFixturesComponent } from './football-fixtures.component';
import { NbCardModule, NbListModule } from '@nebular/theme';
import { CoreModule } from 'src/app/core/core.module';

describe('FootballFixturesComponent', () => {
  let component: FootballFixturesComponent;
  let fixture: ComponentFixture<FootballFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NbCardModule, NbListModule, CoreModule ],
      declarations: [ FootballFixturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});