import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  api = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  getJobs() {
    const url = this.api + 'jobs';
    return this.http.get(url);
  }
  getSkills() {
    const url = this.api + 'skills';
    return this.http.get(url);
  }
  getEducation() {
    const url = this.api + 'education';
    return this.http.get(url);
  }
}
