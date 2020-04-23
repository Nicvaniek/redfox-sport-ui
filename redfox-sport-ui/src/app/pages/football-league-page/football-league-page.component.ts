import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/football/models/league';
import { FootballMatch } from 'src/app/football/models/football-match';
import { EPL_TODAY } from 'src/app/core/mocks/epl-matches-today';
import { Standing } from 'src/app/football/models/standing';
import { EPL_STANDINGS } from 'src/app/core/mocks/epl-standings';
import { TopScorer } from 'src/app/football/models/top-scorer';

@Component({
  selector: 'app-football-league-page',
  templateUrl: './football-league-page.component.html',
  styleUrls: ['./football-league-page.component.scss']
})
export class FootballLeaguePageComponent implements OnInit {

  public league: League;
  public standings: Standing[];
  public topScorers: TopScorer[];
  public matches: FootballMatch[];

  constructor() { }

  ngOnInit(): void {
    this.matches = EPL_TODAY;
    this.standings = EPL_STANDINGS;
    this.league = {
      name: 'Premier League',
      logo: 'https://media.api-sports.io/football/leagues/39.png'
    };
  }

}
