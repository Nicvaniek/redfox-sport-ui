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

  public showCalendar = false;
  public selectedDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public toggleCalendar(): void {
    this.showCalendar = !this.showCalendar;
  }

  public nextDay() {
    const result = new Date(this.selectedDate);
    result.setDate(result.getDate() + 1);
    this.selectedDate = result;
  }

  public previousDay() {
    const result = new Date(this.selectedDate);
    result.setDate(result.getDate() - 1);
    this.selectedDate = result;
  }

}
