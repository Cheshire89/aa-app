import { Component } from '@angular/core'

@Component({
    selector: 'app-resume-contact',
    templateUrl: './resume-contact.component.html',
    styleUrls: ['./resume-contact.component.scss'],
})
export class ResumeContactComponent {
    currentYear = new Date().getFullYear()
}
