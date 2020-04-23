import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballLeaguePageComponent } from './football-league-page.component';

describe('FootballLeaguePageComponent', () => {
  let component: FootballLeaguePageComponent;
  let fixture: ComponentFixture<FootballLeaguePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballLeaguePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballLeaguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
