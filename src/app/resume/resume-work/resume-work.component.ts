import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Company } from './resume-work.model';

@Component({
  selector: 'app-resume-work',
  templateUrl: './resume-work.component.html',
  styleUrl: './resume-work.component.scss',
})
export class ResumeWorkComponent implements AfterViewInit {
  projects = new Array(10).fill({
    source: 'https://placehold.co/410x230',
    title: 'Segnificantly Longer Title to See',
  });

  projects_alt: Company[] = [
    {
      name: 'Sinch',
      stack: 'Reactjs',
      projects: [
        {
          title: 'Sinch Sip',
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
    // console.log('elements', this.ele.nativeElement.querySelectorAll('.work__project'));
    VanillaTilt.init(this.ele.nativeElement.querySelectorAll('.work__project-detail'), { max: 25, speed: 400 });
  }
}
