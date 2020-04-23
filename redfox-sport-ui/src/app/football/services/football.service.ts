import { Injectable } from '@angular/core';
import { FOOTBALL_TODAY } from 'src/app/core/mocks/football-matches-today';
import { Observable, of } from 'rxjs';
import { FootballMatch } from 'src/app/football/models/football-match';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor() { }

  public getMatchesToday(): Observable<FootballMatch[]> {
    const matches = FOOTBALL_TODAY;
    return of(matches);
  }
}
