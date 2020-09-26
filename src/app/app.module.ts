import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { ResumeModule } from './resume/resume.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, LayoutModule, ResumeModule, BlogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
