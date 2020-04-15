import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballMatchCardComponent } from './football-match-card.component';

describe('FootballMatchCardComponent', () => {
  let component: FootballMatchCardComponent;
  let fixture: ComponentFixture<FootballMatchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FootballMatchCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballMatchCardComponent);
    component = fixture.componentInstance;
    component.match = {
      league: {
        name: 'English Premier League'
      },
      homeTeam: {
        name: 'Man United',
        crest: ''
      },
      awayTeam: {
        name: 'Man City',
        crest: ''
      },
      homeTeamGoals: 0,
      awayTeamGoals: 0,
      time: '24\''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
