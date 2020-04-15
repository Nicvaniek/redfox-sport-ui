import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballMatchCardComponent } from './football-match-card.component';

describe('FootballMatchCardComponent', () => {
  let component: FootballMatchCardComponent;
  let fixture: ComponentFixture<FootballMatchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballMatchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
