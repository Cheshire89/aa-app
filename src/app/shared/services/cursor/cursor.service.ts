import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  isOverLink: BehaviorSubject<boolean | null> = new BehaviorSubject(null);
  public updateLinkRef(isOver: boolean) {
    this.isOverLink.next(isOver);
  }

  public isUrl(str) {
    return str.includes('http') || str.includes('https');
  }
}
