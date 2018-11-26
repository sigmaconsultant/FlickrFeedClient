import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedData } from '../shared/feed-data';
import { FeedService } from './service/feed.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  private destroyed: Subject<null> = new Subject<null>();

  feed: FeedData[] = [];
  searchText: string = ""; 

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getFeed("", 0)
    .pipe(takeUntil(this.destroyed))
    .subscribe(feed => {this.feed = feed}, err => {alert('There was an error while getting feed'); console.log(err)})
  }

  ngOnDestroy() {
    this.destroyed.next();
  }
}
