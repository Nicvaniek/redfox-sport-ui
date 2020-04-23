import { Component, OnInit, OnDestroy } from '@angular/core';
import { League } from 'src/app/football/models/league';
import { FootballMatch } from 'src/app/football/models/football-match';
import { EPL_TODAY } from 'src/app/core/mocks/epl-matches-today';
import { Standing } from 'src/app/football/models/standing';
import { EPL_STANDINGS } from 'src/app/core/mocks/epl-standings';
import { TopScorer } from 'src/app/football/models/top-scorer';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BUNDESLIGA_TODAY } from 'src/app/core/mocks/bundesliga-matches-today';
import { BUNDESLIGA_STANDINGS } from 'src/app/core/mocks/bundesliga-standings';

@Component({
  selector: 'app-football-league-page',
  templateUrl: './football-league-page.component.html',
  styleUrls: ['./football-league-page.component.scss']
})
export class FootballLeaguePageComponent implements OnInit, OnDestroy {

  public league: League;
  public standings: Standing[];
  public topScorers: TopScorer[];
  public matches: FootballMatch[];
  public colorScheme: string;

  private unsubscrie$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.unsubscrie$))
      .subscribe((params: ParamMap) => {
        const id = Number(params.get('id'));

        if (id === 524) {
          this.matches = EPL_TODAY;
          this.standings = EPL_STANDINGS;
          this.league = {
            name: 'Premier League',
            logo: 'https://media.api-sports.io/football/leagues/39.png'
          };
          this.colorScheme = '#304';
        } else if (id === 754) {
          this.colorScheme = '#d01';
          this.matches = BUNDESLIGA_TODAY;
          this.standings = BUNDESLIGA_STANDINGS;
          this.league = {
            name: 'Bundesliga',
            logo: 'https://media.api-sports.io/football/leagues/78.png'
          };
        }
    });
  }

  ngOnDestroy(): void {
    this.unsubscrie$.next();
    this.unsubscrie$.complete();
  }

}
