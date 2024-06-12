import { AfterViewInit, Component, ElementRef } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Company, Project } from './resume-work.model';
import { Observable } from 'rxjs';
import { EnvironmentService } from '@shared/services/environment/environment.service';

@Component({
  selector: 'app-resume-work',
  templateUrl: './resume-work.component.html',
  styleUrl: './resume-work.component.scss',
})
export class ResumeWorkComponent implements AfterViewInit {
  projects$: Observable<Company[]>;

  constructor(private ele: ElementRef, private _env: EnvironmentService) {
    this.projects$ = this._env.getFile('projects.json');
  }

  ngAfterViewInit(): void {
    const ele = this.ele.nativeElement.querySelectorAll('.work__project-detail');
    VanillaTilt.init(ele, { max: 25, speed: 400 });
  }

  onViewProject(project: Project) {
    window.open(project.link, '_blank');
  }
}
