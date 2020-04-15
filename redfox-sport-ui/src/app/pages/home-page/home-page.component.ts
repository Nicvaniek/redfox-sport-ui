import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/football/services/football.service';
import { FootballMatch } from 'src/app/core/mocks/models/football-match';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public footballMatches: FootballMatch[];

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.loadFootballMatches();
  }

  private loadFootballMatches() {
    this.footballService.getMatchesToday()
      .subscribe(matches => this.footballMatches = matches);
  }

}
