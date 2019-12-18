import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL_TOKEN} from './config';
import {Observable} from 'rxjs';
import {ICard} from './models/repos-card';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) {

  }

  public searchRepo(keyword: string): Observable<ICard> {
    return this.http.get<ICard>(`${this.baseUrl}search/repositories?q=` + keyword);
  }
}

