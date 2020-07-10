import { Injectable } from '@angular/core';
import { ArticlesControllerService } from 'src/app/api/services';
import { Article } from 'src/app/api/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private sportsArticles: Article[];

  constructor(private articlesService: ArticlesControllerService) { }

  public getSportsArticles(): Observable<Article[]> {
    return new Observable(observer => {
      if (this.sportsArticles) {
        observer.next(this.sportsArticles);
        return observer.complete();
      }
      this.articlesService.getArticlesUsingGET().subscribe(response => {
        this.sportsArticles = response.articles;
        observer.next(this.sportsArticles);
        observer.complete();
      }, () => {
        observer.error();
        observer.complete();
      });
    });
  }
}
