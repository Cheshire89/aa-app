import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAllComponent } from './blog-all/blog-all.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BlogAllComponent],
  imports: [CommonModule, HttpClientModule],
})
export class BlogModule {}
