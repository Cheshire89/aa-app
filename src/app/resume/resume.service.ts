import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get('/assets/doc/resume.txt', { responseType: 'text' });
  }
}
