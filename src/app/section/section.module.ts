import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { SkillScramplerComponent } from './intro/skill-scrampler/skill-scrampler.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [IntroComponent, SkillScramplerComponent, AboutComponent, ContactComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [IntroComponent, AboutComponent, ContactComponent],
})
export class SectionModule {}
