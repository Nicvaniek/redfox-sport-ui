import { Component, OnInit, OnDestroy } from '@angular/core';
import { FixturesResponse } from 'src/app/football/models/fixtures-response';
import { FOOTBALL_TODAY } from 'src/app/core/mocks/football-today';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { Article } from 'src/app/api/models/article';
import { NewsService } from 'src/app/news/services/news.service';
import { NgxUiLoaderService, SPINNER, POSITION } from 'ngx-ui-loader';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  public headlines: Article[] = [];
  public footballToday: FixturesResponse[];
  public NEWS_LOADER_KEY = 'sports-news-loader';
  public SPINNER_TYPES = SPINNER;
  public SPINNER_POSITION = POSITION;
  public sportsNewsLoadError = false;

  private unsubscribe$ = new Subject();

  constructor(private newsService: NewsService, private loaderService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.loadSportNews();
    this.footballToday = FOOTBALL_TODAY;
  }

  private loadSportNews(): void {
    this.loaderService.startLoader(this.NEWS_LOADER_KEY);
    this.newsService.getSportsArticles().pipe(
      takeUntil(this.unsubscribe$),
      finalize(() => this.loaderService.stopLoader(this.NEWS_LOADER_KEY))
    ).subscribe(articles => {
        this.headlines = articles;
      }, () => this.sportsNewsLoadError = true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
