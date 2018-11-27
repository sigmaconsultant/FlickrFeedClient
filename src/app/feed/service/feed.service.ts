import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedData } from '../../shared/feed-data';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

apiUrl: string = "http://localhost:10000";

constructor(private http: HttpClient) { }

/*
 * getFeed 
 * Returns the feed data from the API
 * 
 * @param {string} searchText: The text to search. Empty string will show all.
 * @param {string} limit: The row limit.
 * @returns {FeedData} Returns an array of FeedData.
 * 
 */

getFeed(searchText: string, limit: number): Observable<FeedData[]> {

  return this.http.get(this.apiUrl + '/api/getFeed?q=' + searchText + "&l=" + limit)
  .pipe(map((result: FeedData[]) => {
    return result.map(d => {return new FeedData(d.title, d.subtitle, d.pictureUrl)});
  }));
    
}

}
