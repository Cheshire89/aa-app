import { AfterViewInit, Component, ElementRef } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Company, Project } from './resume-work.model';

@Component({
  selector: 'app-resume-work',
  templateUrl: './resume-work.component.html',
  styleUrl: './resume-work.component.scss',
})
export class ResumeWorkComponent implements AfterViewInit {
  projects: Company[] = [
    {
      name: 'Sinch',
      stack: 'Reactjs',
      projects: [
        {
          title: 'Sinch Sip',
          link: 'https://www.sinch.com/products/voice/sip-trunking/',
          images: [
            {
              title: 'Dashboard',
              source: 'sinch_1.png',
            },
            {
              title: 'Sip Management Protal',
              source: 'sinch_2.png',
            },
          ],
        },
      ],
    },
    {
      name: 'Rocket Communications',
      stack: 'Reactjs, Python, Storybook',
      projects: [
        {
          title: 'Astro UXDS',
          link: 'https://www.rocketcom.com/portfolio/astro-ux-design-system/',
          images: [
            {
              title: 'Welcome',
              source: 'astrouxds.png',
            },
            {
              title: 'Components',
              source: 'astrouxds_2.png',
            },
          ],
        },
        {
          title: 'Space ACME',
          link: 'https://www.rocketcom.com/portfolio/space-acme/',
          images: [
            {
              title: 'Dashboard',
              source: 'spaceacme.png',
            },
          ],
        },
      ],
    },
    {
      name: 'Spectrum',
      stack: 'Angular, Android, IOS',
      projects: [
        {
          title: 'Client Dashboard',
          link: 'https://spectrum.net/',
          images: [
            {
              title: 'Home',
              source: 'spectrumnet.png',
            },
            {
              title: 'Services',
              source: 'spectrumnet_2.png',
            },
          ],
        },
      ],
    },
  ];

  constructor(private ele: ElementRef) {}

  ngAfterViewInit(): void {
    VanillaTilt.init(this.ele.nativeElement.querySelectorAll('.work__project-detail'), { max: 25, speed: 400 });
  }

  onViewProject(project: Project) {
    window.open(project.link, '_blank');
  }
}
