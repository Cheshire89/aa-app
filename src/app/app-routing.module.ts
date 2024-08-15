import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './layout'
import { ResumeIndexComponent } from './resume/resume-index/resume-index.component'
import { ProjectDetailComponent } from './project/project-detail/project-detail.component'

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: ResumeIndexComponent,
            },
            {
                path: ':slug',
                component: ProjectDetailComponent,
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
