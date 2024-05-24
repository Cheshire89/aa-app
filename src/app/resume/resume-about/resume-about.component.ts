import { Component, OnInit } from '@angular/core';
import { ResumeBlock } from '../resume-block.model';
import { ResumeService } from '../resume.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resume-about',
  templateUrl: './resume-about.component.html',
  styleUrls: ['./resume-about.component.scss'],
})
export class ResumeAboutComponent implements OnInit {
  concatString = '';
  isStr = false;
  wrap = false;
  name: string;
  wrapResumeBlock: any = { type: null, str: '' };
  closingTag = { type: null, str: ';' };
  about$: Observable<ResumeBlock[]>;

  constructor(private _resumeSerivce: ResumeService) {}

  ngOnInit() {
    this.about$ = this._resumeSerivce.get();
  }
}
