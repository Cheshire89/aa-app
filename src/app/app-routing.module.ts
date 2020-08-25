import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { IntroComponent } from './section/intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // { path: '', pathMatch: 'full', redirectTo },
      {
        path: '',
        component: IntroComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
