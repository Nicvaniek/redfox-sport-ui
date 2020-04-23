import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballTableComponent } from './football-table.component';
import { NbCardModule } from '@nebular/theme';

describe('FootballTableComponent', () => {
  let component: FootballTableComponent;
  let fixture: ComponentFixture<FootballTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbCardModule],
      declarations: [ FootballTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
