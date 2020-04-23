import { Component, OnInit, Input } from '@angular/core';
import { FootballMatch } from 'src/app/football/models/football-match';

@Component({
  selector: 'app-football-match-card',
  templateUrl: './football-match-card.component.html',
  styleUrls: ['./football-match-card.component.scss']
})
export class FootballMatchCardComponent implements OnInit {

  @Input()
  public match: FootballMatch;

  private leagueCardColourMap = new Map<string, string>();
  private readonly ENGLISH_PREMIER_LEAGUE = 'English Premier League';
  private readonly ENGLISH_LEAGUE_CUP = 'EFL Cup';
  private readonly CHAMPIONS_LEAGUE = 'UEFA Champions League';

  constructor() {
    this.leagueCardColourMap.set(this.ENGLISH_PREMIER_LEAGUE, '#304');
    this.leagueCardColourMap.set(this.ENGLISH_LEAGUE_CUP, '#096');
    this.leagueCardColourMap.set(this.CHAMPIONS_LEAGUE, '#005');
  }

  ngOnInit(): void {
  }

  public getCardColour() {
    return this.leagueCardColourMap.get(this.match.league.name);
  }

}
