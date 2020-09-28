import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAllComponent } from './blog-all/blog-all.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { RouterModule } from '@angular/router';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlogAllComponent, BlogViewComponent, BlogEditComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, ReactiveFormsModule],
})
export class BlogModule {}
