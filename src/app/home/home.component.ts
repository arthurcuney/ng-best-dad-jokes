import { Component, OnInit } from '@angular/core';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { JokeService } from '../api/jokeService/joke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = postsMock

  //posts: Post[] = this.getJokes();
  
  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.posts = this.getJokes();
  }

  getJokes(): Post[] {
    return this.jokeService.getJokes();
  }

}
