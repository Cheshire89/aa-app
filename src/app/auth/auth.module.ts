import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, RouterModule, LayoutModule],
})
export class AuthModule {}
