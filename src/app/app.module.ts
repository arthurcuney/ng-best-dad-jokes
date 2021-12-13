import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JokeService } from './api/jokeService/joke.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    JokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
