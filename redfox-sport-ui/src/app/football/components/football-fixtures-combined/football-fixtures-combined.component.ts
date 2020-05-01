import { Component, OnInit, Input } from '@angular/core';
import { FixturesResponse } from '../../models/fixtures-response';

@Component({
  selector: 'app-football-fixtures-combined',
  templateUrl: './football-fixtures-combined.component.html',
  styleUrls: ['./football-fixtures-combined.component.scss']
})
export class FootballFixturesCombinedComponent implements OnInit {

  @Input()
  public fixtures: FixturesResponse[];

  @Input()
  public cardTitle: string;

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
