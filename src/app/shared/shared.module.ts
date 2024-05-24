import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDirective, HyperLinkDirective, MatrixBgDirective } from './directives';

@NgModule({
  declarations: [LinkDirective, HyperLinkDirective, MatrixBgDirective],
  imports: [CommonModule],
  exports: [LinkDirective, HyperLinkDirective, MatrixBgDirective],
})
export class SharedModule {}
