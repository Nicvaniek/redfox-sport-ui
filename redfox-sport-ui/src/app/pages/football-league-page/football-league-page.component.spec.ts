import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballLeaguePageComponent } from './football-league-page.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('FootballLeaguePageComponent', () => {
  let component: FootballLeaguePageComponent;
  let fixture: ComponentFixture<FootballLeaguePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ FootballLeaguePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballLeaguePageComponent);
    component = fixture.componentInstance;
    component.league = {
      logo: 'test'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
