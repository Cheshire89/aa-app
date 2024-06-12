import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEnvironment } from '@envionrments/envirionment.model';
import { environment } from '@envionrments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements IEnvironment {
  get production() {
    return environment.production;
  }

  get dataUrl() {
    return environment.dataUrl;
  }

  get logLevel() {
    return environment.logLevel;
  }

  get enableDebugTools() {
    return environment.enableDebugTools;
  }

  constructor(private http: HttpClient) {}

  getFile(fileName: string, options: any = {}): Observable<any> {
    return this.http.get(`${this.dataUrl}/${fileName}`, options);
  }
}
