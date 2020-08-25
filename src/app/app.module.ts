import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainComponent } from './layout/main/main.component';
import { CursorComponent } from './layout/cursor/cursor.component';
import { SectionModule } from './section/section.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainComponent, CursorComponent],
  imports: [BrowserModule, AppRoutingModule, SectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
