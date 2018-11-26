import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {path: 'feed', component: FeedComponent}
  ,
  { path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
