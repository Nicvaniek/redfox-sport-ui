import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballFixturesComponent } from './football-fixtures.component';

describe('FootballFixturesComponent', () => {
  let component: FootballFixturesComponent;
  let fixture: ComponentFixture<FootballFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
