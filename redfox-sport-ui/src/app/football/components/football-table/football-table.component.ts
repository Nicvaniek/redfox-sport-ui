import { Component, OnInit, Input } from '@angular/core';
import { Standing } from '../../models/standing';

@Component({
  selector: 'app-football-table',
  templateUrl: './football-table.component.html',
  styleUrls: ['./football-table.component.scss']
})
export class FootballTableComponent implements OnInit {

  @Input()
  public leagueName: string;

  @Input()
  public standings: Standing[];

  constructor() { }

  ngOnInit(): void {
  }

}
