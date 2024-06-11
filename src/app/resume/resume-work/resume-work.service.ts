import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './resume-work.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeWorkService {
  private DATA_URL = '/assets/data';
  constructor(private http: HttpClient) {}

  get(): Observable<Company[]> {
    return this.http.get(`${this.DATA_URL}/projects.json`, { responseType: 'json' }) as Observable<Company[]>;
  }
}
