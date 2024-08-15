import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectListComponent } from './project-list/project-list.component'
import { ProjectDetailComponent } from './project-detail/project-detail.component'
// import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [ProjectListComponent, ProjectDetailComponent],
    imports: [CommonModule],
    exports: [ProjectListComponent, ProjectDetailComponent],
})
export class ProjectModule {}
