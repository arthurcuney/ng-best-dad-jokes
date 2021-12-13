import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  getJokes(): any {
    this.httpClient.get('http://localhost:3001/posts').subscribe(
      value => {
        return value;
      });
  }
  
}