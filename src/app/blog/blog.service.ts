import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

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

  update(id: string, post: Post) {
    const url = `${this.blogUrl}/${id}`;
    return this.http.put(url, post);
  }

  create(post: Post) {
    const url = this.blogUrl;
    return this.http.post(url, post);
  }

  delete() {}
}
