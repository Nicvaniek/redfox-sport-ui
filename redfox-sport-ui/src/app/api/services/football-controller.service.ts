/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Football Controller
 */
@Injectable({
  providedIn: 'root',
})
class FootballControllerService extends __BaseService {
  static readonly getLeaguesUsingGETPath = '/football/leagues';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getLeagues
   * @return OK
   */
  getLeaguesUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/football/leagues`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * getLeagues
   * @return OK
   */
  getLeaguesUsingGET(): __Observable<string> {
    return this.getLeaguesUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }
}

module FootballControllerService {
}

export { FootballControllerService }
