import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogUrl = 'http://localhost:3000/api/posts';
  constructor(private http: HttpClient) {}

  get(link?: string) {
    let url = this.blogUrl;
    if (link) {
      url += `/${link}`;
    }
    return this.http.get(url);
  }

  put() {}
  update() {}
  delete() {}
}
