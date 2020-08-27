import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { SkillScramplerComponent } from './intro/skill-scrampler/skill-scrampler.component';

@NgModule({
  declarations: [IntroComponent, SkillScramplerComponent],
  imports: [CommonModule, HttpClientModule],
})
export class SectionModule {}
