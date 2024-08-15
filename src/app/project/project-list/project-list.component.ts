import { Component, ElementRef } from '@angular/core'
import { Router } from '@angular/router'
import { EnvironmentService } from '@shared/services/environment/environment.service'
import { Observable } from 'rxjs'
import { Company } from 'src/app/models/company.model'
import VanillaTilt from 'vanilla-tilt'

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
    projects$: Observable<Company[]>

    constructor(
        private ele: ElementRef,
        private router: Router,
        private _env: EnvironmentService
    ) {
        this.projects$ = this._env.getFile('projects.json')
    }

    ngAfterViewInit(): void {
        const ele = this.ele.nativeElement.querySelectorAll(
            '.work__project-detail'
        )
        VanillaTilt.init(ele, { max: 25, speed: 400 })
    }

    onViewCompany(company: Company) {
        // this.router.navigate([company.slug])
        console.warn(
            'Company details page have not been implimented yet',
            `[${company.slug}]`
        )
    }
}
