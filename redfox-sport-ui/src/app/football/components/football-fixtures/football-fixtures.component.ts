import { Component, OnInit, Input } from '@angular/core';
import { FootballMatch } from '../../models/football-match';

@Component({
  selector: 'app-football-fixtures',
  templateUrl: './football-fixtures.component.html',
  styleUrls: ['./football-fixtures.component.scss']
})
export class FootballFixturesComponent implements OnInit {

  @Input()
  public fixtures: FootballMatch[];

  @Input()
  public color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
