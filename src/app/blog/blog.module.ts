import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAllComponent } from './blog-all/blog-all.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogAllComponent, BlogViewComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class BlogModule {}
