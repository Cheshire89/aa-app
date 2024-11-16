import { Component, QueryList, ViewChildren } from '@angular/core'
import { EnvironmentService } from '@shared/services/environment/environment.service'
import { Observable } from 'rxjs'
import { Company } from 'src/app/models/company.model'
import { Project } from 'src/app/models/project.model'
import VanillaTilt from 'vanilla-tilt'

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
    @ViewChildren('workDetail') workDetail: QueryList<any>;

    projects$: Observable<Company[]>

    constructor(
        private _env: EnvironmentService
    ) {
        this.projects$ = this._env.getFile('projects.json')
    }

    ngAfterViewInit(): void {
        VanillaTilt.init(this.workDetail.map(e => e.nativeElement), { max: 25, speed: 400 })
    }

    onViewProject(project: Project) {
        window.open(project.link, '_blank')
    }
}
