import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent, LogoComponent, MainComponent, NavbarComponent } from './';
import { RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [CursorComponent, LogoComponent, MainComponent, NavbarComponent, SectionComponent],
  imports: [CommonModule, RouterModule],
  exports: [LogoComponent, CursorComponent, SectionComponent],
})
export class LayoutModule {}
