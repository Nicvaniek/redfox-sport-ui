import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballHomePageComponent } from './football-home-page.component';

describe('FootballHomePageComponent', () => {
  let component: FootballHomePageComponent;
  let fixture: ComponentFixture<FootballHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
