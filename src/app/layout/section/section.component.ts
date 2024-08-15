import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
    @Input() startingblock = false
    @Input() title
    sectionTitle: string
    constructor() {}

    ngOnInit() {
        this.sectionTitle = `<${this.capitalize(this.title)}/>`
    }

    capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}
