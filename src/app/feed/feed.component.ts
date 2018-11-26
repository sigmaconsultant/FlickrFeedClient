import { Component, OnInit } from '@angular/core';
import { FeedData } from '../shared/feed-data';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feed: FeedData[] = [];
  searchText: string = ""; 

  constructor() { }

  ngOnInit() {
  }

}
