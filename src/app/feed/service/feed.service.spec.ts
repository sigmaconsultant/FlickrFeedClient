/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeedService } from './feed.service';

let feedService: FeedService;
let feedServiceSpy: jasmine.SpyObj<FeedService>;

describe('Service: Feed', () => {
  beforeEach(() => {
    const spy = jasmine.createSpyObj('FeedService', [
      {title: "One", subtitle: "This is One", pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Common_Jasmine.jpg"},
      {title: "Two", subtitle: "This is Two", pictureUrl: "https://images.meredith.com/content/dam/bhg/Images/2009/03/100828330.jpg.rendition.largest.ss.jpg"},
      {title: "Three", subtitle: "This is Three", pictureUrl: "https://www.buckleyandphillips.com.au/productimages/9015SGL_1.jpg"}
    ]);

    TestBed.configureTestingModule({
      providers: [FeedService, { provide: FeedService, useValue: spy }]
    });

    feedService = TestBed.get(FeedService);
    feedServiceSpy = TestBed.get(feedService);
  });

  it('should return some objs', inject([FeedService], (service: FeedService) => {
    feedServiceSpy.getFeed.and.returnValue('test value');

    expect(service.getFeed("", 0))
    .toBe('test value', 'service returned stub value');
  }));
});
