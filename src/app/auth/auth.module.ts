import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, RouterModule, LayoutModule, ReactiveFormsModule],
})
export class AuthModule {}
