import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent, LogoComponent, MainComponent, NavbarComponent } from './';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CursorComponent, LogoComponent, MainComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [LogoComponent, CursorComponent],
})
export class LayoutModule {}
