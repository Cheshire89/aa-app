import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClientModule) {}

  get() {}
  put() {}
  update() {}
  delete() {}
}
