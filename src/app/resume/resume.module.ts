import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ResumeContactComponent } from './resume-contact/resume-contact.component';
import { ResumeAboutComponent } from './resume-about/resume-about.component';
import { ResumeIntroComponent } from './resume-intro/resume-intro.component';
import { IntroSkillScramblerComponent } from './resume-intro/intro-skill-scrambler/intro-skill-scrambler.component';
import { LayoutModule } from '../layout/layout.module';
import { ResumeIndexComponent } from './resume-index/resume-index.component';
import { ResumeFooterComponent } from './resume-footer/resume-footer.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeWorkComponent } from './resume-work/resume-work.component';

@NgModule({
  declarations: [
    ResumeIndexComponent,
    ResumeContactComponent,
    ResumeAboutComponent,
    ResumeIntroComponent,
    ResumeWorkComponent,
    IntroSkillScramblerComponent,
    ResumeFooterComponent,
  ],
  imports: [CommonModule, LayoutModule, HttpClientModule, SharedModule],
})
export class ResumeModule {}
