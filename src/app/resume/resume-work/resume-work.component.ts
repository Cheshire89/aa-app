import { AfterViewInit, Component, ElementRef } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Company, Project } from './resume-work.model';
import { Observable } from 'rxjs';
import { ResumeWorkService } from './resume-work.service';

@Component({
  selector: 'app-resume-work',
  templateUrl: './resume-work.component.html',
  styleUrl: './resume-work.component.scss',
})
export class ResumeWorkComponent implements AfterViewInit {
  projects$: Observable<Company[]>;

  constructor(private ele: ElementRef, private _resumeWorkService: ResumeWorkService) {
    this.projects$ = this._resumeWorkService.get();
  }

  ngAfterViewInit(): void {
    VanillaTilt.init(this.ele.nativeElement.querySelectorAll('.work__project-detail'), { max: 25, speed: 400 });
  }

  onViewProject(project: Project) {
    window.open(project.link, '_blank');
  }
}
