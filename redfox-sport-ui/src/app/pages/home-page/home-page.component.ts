import { Component, OnInit, OnDestroy } from '@angular/core';
import { FixturesResponse } from 'src/app/football/models/fixtures-response';
import { FOOTBALL_TODAY } from 'src/app/core/mocks/football-today';
import { ArticlesControllerService } from 'src/app/api/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Article } from 'src/app/api/models/article';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  public headlines: Article[] = [];
  public footballToday: FixturesResponse[];

  private unsubscribe$ = new Subject();

  constructor(private articlesService: ArticlesControllerService) { }

  ngOnInit(): void {
    this.loadSportNews();
    this.footballToday = FOOTBALL_TODAY;
  }

  private loadSportNews(): void {
    // TODO: Might be best to add a store and dispatch an action to fetch this in the app component.
    // This will allow us to keep the news list in the store and won't load each timw you load this component.
    // However, when you refresh the page, the list should update :)
    this.articlesService.getArticlesUsingGET()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(response => {
        this.headlines = response.articles;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
