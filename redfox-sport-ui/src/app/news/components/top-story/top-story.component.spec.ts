import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoryComponent } from './top-story.component';

describe('TopStoryComponent', () => {
  let component: TopStoryComponent;
  let fixture: ComponentFixture<TopStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoryComponent);
    component = fixture.componentInstance;
    component.article = {
      source: 'Hahaha',
      author: 'Reuters',
      title: 'Batting great Kumar Sangakkara says England, Australia must tour Pakistan - Geo News',
      description: 'Sangakkara says MCC tour will be a precursor to the sides making up their minds to actually tour when security is assured',
      articleUrl: 'https://www.geo.tv/latest/285856-batting-great-kumar-sangakkara-england-australia-must-tour-pakistan',
      imageUrl: 'https://www.geo.tv/assets/uploads/updates/2020-05-01/285856_114933_updates.jpg',
      publishedAt: '2020-05-01T08:35:02Z',
      content: 'LONDON: Marylebone Cricket Club (MCC) President Kumar Sangakkara has stated that England and Australia must tour Pakistan to facilitate regular international cricket in the South Asian country.\r\nTop teams have shunned Pakistan since the 2009 attack on a bus c… [+1872 chars]'
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
