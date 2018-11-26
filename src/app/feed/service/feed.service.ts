import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedData } from '../../shared/feed-data';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

constructor(private http: HttpClient) { }

getFeed(searchText: string, limit: number): Observable<FeedData[]> {

  return this.http.get('/api/getFeed?q=' + searchText + "&l=" + limit)
  .pipe(map(result => {
    return result['data'].map(d => {return new FeedData(d.title, d.subtitle, d.pictureUrl)});
  }));
    
}

}
