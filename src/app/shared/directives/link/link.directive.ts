import { AfterViewChecked, AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLink]',
})
export class LinkDirective implements OnInit {
  @Input() appLink: string;

  constructor(private renderer: Renderer2, private ele: ElementRef) {}

  ngOnInit(): void {
    if (this.isValidHttpUrl(this.appLink)) {
      const link = this.renderer.createElement('a');
      this.renderer.setAttribute(link, 'href', this.appLink.replace(/\"/g, ''));
      this.renderer.setAttribute(link, 'target', '_blank');
      this.renderer.setProperty(link, 'innerHTML', '切り手');

      this.renderer.appendChild(this.ele.nativeElement, link);
    } else {
      this.ele.nativeElement.innerHTML = this.appLink;
    }
  }

  private isValidHttpUrl(str) {
    return str.includes('http') || str.includes('https');
  }
}

@Directive({
  selector: 'a[href]',
})
export class HyperLinkDirective {}
