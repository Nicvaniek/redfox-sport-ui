import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballHomePageComponent } from './football-home-page.component';
import { FootballModule } from 'src/app/football/football.module';
import { NbCardModule } from '@nebular/theme';
import { NewsModule } from 'src/app/news/news.module';

describe('FootballHomePageComponent', () => {
  let component: FootballHomePageComponent;
  let fixture: ComponentFixture<FootballHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballHomePageComponent ],
      imports: [FootballModule, NbCardModule, NewsModule]
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
