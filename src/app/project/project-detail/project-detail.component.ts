import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EnvironmentService } from '@shared/services/environment/environment.service'
import { filter, map, Observable } from 'rxjs'
import { Company } from 'src/app/models/company.model'

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
    company$: Observable<Company>
    constructor(private ac: ActivatedRoute, private _env: EnvironmentService) {
        const slugParam = this.ac.snapshot.paramMap.get('slug')
        this.company$ = this._env
            .getFile('projects.json')
            .pipe(
                map(
                    (c: Company[]) =>
                        c.filter(({ slug }) => slug === slugParam)[0]
                )
            )
    }
}
