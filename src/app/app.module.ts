import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionModule } from './section/section.module';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, SectionModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
