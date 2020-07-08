/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticlesResponse } from '../models/articles-response';

/**
 * Articles Controller
 */
@Injectable({
  providedIn: 'root',
})
class ArticlesControllerService extends __BaseService {
  static readonly getArticlesUsingGETPath = '/articles';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getArticles
   * @param sport sport
   * @return OK
   */
  getArticlesUsingGETResponse(sport?: 'FOOTBALL' | 'RUGBY' | 'GOLF' | 'TENNIS' | 'FORMULA_ONE'): __Observable<__StrictHttpResponse<ArticlesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (sport != null) __params = __params.set('sport', sport.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticlesResponse>;
      })
    );
  }
  /**
   * getArticles
   * @param sport sport
   * @return OK
   */
  getArticlesUsingGET(sport?: 'FOOTBALL' | 'RUGBY' | 'GOLF' | 'TENNIS' | 'FORMULA_ONE'): __Observable<ArticlesResponse> {
    return this.getArticlesUsingGETResponse(sport).pipe(
      __map(_r => _r.body as ArticlesResponse)
    );
  }
}

module ArticlesControllerService {
}

export { ArticlesControllerService }
