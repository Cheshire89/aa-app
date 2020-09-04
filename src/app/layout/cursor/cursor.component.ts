import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements OnInit {
  links: NodeList;
  cursor;
  cursorOutline;
  timer = null;
  path: { x: number; y: number }[] = [];

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const coordinates = {
      x: e.pageX,
      y: e.pageY,
    };

    this.path.push(coordinates);

    this.cursor.style.top = `${coordinates.y}px`;
    this.cursor.style.left = `${coordinates.x}px`;

    if (this.timer === null) {
      this.timer = setTimeout(() => {
        this.path.forEach((pathCoordinates: { x: number; y: number }) => {
          this.cursorOutline.style.top = `${pathCoordinates.y}px`;
          this.cursorOutline.style.left = `${pathCoordinates.x}px`;
        });
        this.path = [];
        this.timer = null;
      }, 100);
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    this.cursor.classList.add('cursor--down');
    this.cursorOutline.classList.add('cursor__outline--down');
  }
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    this.cursor.classList.remove('cursor--down');
    this.cursorOutline.classList.remove('cursor__outline--down');
  }

  constructor(private ele: ElementRef) {}

  ngOnInit() {
    this.cursor = this.ele.nativeElement.children[0];
    this.cursorOutline = this.ele.nativeElement.children[1];
    this.links = document.querySelectorAll('a');

    // move to route change event after component is loaded
    this.links.forEach((link: HTMLAnchorElement) => {
      link.addEventListener('mouseleave', () => {
        this.cursor.classList.remove('cursor--hide');
        this.cursorOutline.classList.remove('cursor__outline--grow');
      });
      link.addEventListener('mouseover', () => {
        this.cursor.classList.add('cursor--hide');
        this.cursorOutline.classList.add('cursor__outline--grow');
      });
    });
  }
}
