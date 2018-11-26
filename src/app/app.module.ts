import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutes } from './app.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      FeedComponent,
      HeaderComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutes
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
