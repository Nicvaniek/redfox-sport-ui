import { Component, OnInit } from '@angular/core';
import { FixturesResponse } from 'src/app/football/models/fixtures-response';
import { FOOTBALL_TODAY } from 'src/app/core/mocks/football-today';
import { Article } from 'src/app/news/models/article';
import { FOOTBALL_HEADLINES } from 'src/app/core/mocks/football-headlines';

@Component({
  selector: 'app-football-home-page',
  templateUrl: './football-home-page.component.html',
  styleUrls: ['./football-home-page.component.scss']
})
export class FootballHomePageComponent implements OnInit {

  public fixtures: FixturesResponse[];
  public headlines: Article[];

  constructor() { }

  ngOnInit(): void {
    this.fixtures = FOOTBALL_TODAY;
    this.headlines = FOOTBALL_HEADLINES;
  }

}
