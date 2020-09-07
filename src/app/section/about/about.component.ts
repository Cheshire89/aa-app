import { Component, OnInit } from '@angular/core';
import * as data from './about.json';
interface Block {
  item: {
    type: string;
    str: string;
  }[];
  depth?: any[];
  line?: number;
  block?: { type: string };
  children?: Block[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  wrap = false;
  name: string;
  // lineCount = 1;
  wrapBlock: any = { type: null, str: '' };
  closingTag = { type: null, str: ';' };
  about: Block[] = (data as any).default;

  constructor() {
    this.about.push({
      item: [],
    });
    this.about.unshift({
      item: [],
    });
    this.setPaddingAttributes(this.about);
  }

  ngOnInit() {}

  setPaddingAttributes(arr: Block[], depth: number = 0, line: number = 0) {
    for (let i = 0; i < arr.length; i++) {
      const objKeys = Object.keys(arr[i]);

      if (objKeys.includes('block')) {
        const str = {
          open: arr[i].block.type === 'curly' ? '{' : '[',
          close: arr[i].block.type === 'curly' ? '}' : ']',
        };

        const openBlock = { ...this.wrapBlock, str: str.open };
        arr[i].item.push(openBlock);
        arr.splice(i + 1, 0, {
          item: [{ type: null, str: str.close }],
        });
      }

      if (objKeys.includes('item')) {
        // set dot tabs
        arr[i].line = line;
        arr[i] = this.setDot(arr[i], depth);
        line++;
      }

      if (objKeys.includes('children') && arr[i].children.length > 0) {
        line = this.setPaddingAttributes(arr[i].children, depth + 1, line);
      }
    }

    return line;
  }

  setDot(block: Block, depth: number) {
    if (block.item.length > 0) {
      block.item.unshift({ type: 'dot', str: '' });
      const dotIndex = block.item.map((e) => e.type).indexOf('dot');
      for (let j = 1; j < depth * 2; j += 2) {
        block.item[dotIndex].str += '··';
      }
    }
    return block;
  }
}
