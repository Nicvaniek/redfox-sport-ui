import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/news/models/article';
import { FixturesResponse } from 'src/app/football/models/fixtures-response';
import { FOOTBALL_TODAY } from 'src/app/core/mocks/football-today';
import { SPORT_HEADLINES } from 'src/app/core/mocks/sport-headlines';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public headlines: Article[];
  public footballToday: FixturesResponse[];

  constructor() { }

  ngOnInit(): void {
    this.headlines = SPORT_HEADLINES;
    this.footballToday = FOOTBALL_TODAY;
  }

}
