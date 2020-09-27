import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { BlogAllComponent } from './blog/blog-all/blog-all.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';
import { MainComponent } from './layout';
import { ResumeIndexComponent } from './resume/resume-index/resume-index.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'resume',
        component: ResumeIndexComponent,
      },
      {
        path: 'blog',
        component: BlogAllComponent,
      },
      {
        path: 'blog/:link',
        component: BlogViewComponent,
      },
    ],
  },

  {
    path: 'signin',
    component: SigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
