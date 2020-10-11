import { Component, OnInit } from '@angular/core';
import { ResumeBlock } from '../resume-block.model';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume-about',
  templateUrl: './resume-about.component.html',
  styleUrls: ['./resume-about.component.scss'],
})
export class ResumeAboutComponent implements OnInit {
  concatString = '';
  isStr = false;
  wrap = false;
  name: string;
  wrapResumeBlock: any = { type: null, str: '' };
  closingTag = { type: null, str: ';' };
  about: ResumeBlock[] = [];

  constructor(private _resumeSerivce: ResumeService) {}

  ngOnInit() {
    this._resumeSerivce.get().subscribe((resumeStr: string) => {
      this.about = this.parseResume(resumeStr.split('\n'));
    });
  }

  preserveStrings(arr: string[]) {
    const replacedString = (index, str): string => {
      if (index) {
        let newStr = str.substr(index);
        newStr = newStr.replace(/\s+/gi, '_');
        return str.substr(0, index) + ' ' + newStr;
      }
      return str;
    };

    return arr.map((str: string) => {
      let index: number = null;
      // comment
      if (RegExp(/\/+(?=[\s]).+/g).test(str)) {
        index = str.indexOf('//');
        str = replacedString(index, str);
      }

      // string
      if (RegExp(/\"+(?=[\w.]).+/g).test(str)) {
        index = str.indexOf('\"');
        str = replacedString(index, str);
      }

      return str;
    });
  }

  parseResume(arr: string[]): ResumeBlock[] {
    arr = this.preserveStrings(arr);
    const jsonResumeBlock = [];
    arr.forEach((str: string, index: number) => {
      const block: ResumeBlock = {
        item: [],
        line: index,
      };

      if (str.length === 0) {
        block.item.push({
          type: null,
          str: ' '
        });
      } else {
        const strArr = str.split(' ');
        console.log(strArr);
        strArr.forEach((chunk: string, index: number) => {
          // console.log('chunk', chunk);
          if (chunk === '') {
            console.log('strArr', strArr[index - 1]);
            if (index === 0 || (strArr[index - 1] === '')) {
              block.item.push({
                type: 'dot',
                str: '·'
              });
            } else {
              block.item.push({
                type: null,
                str: ' '
              });
            }
          } else {
            let fragments;
            if (chunk.indexOf('\"') === -1) {
              fragments = chunk.split(/([.:;[(){}\s])/g);
            } else {
              fragments = chunk.split(/([,\]])/g);
            }


            fragments.forEach((fragment: string) => {
              if (fragment.length) {
                const newBlock = {
                  type: this.assignType(fragment, chunk.split(' ')),
                  str: fragment
                };

                if (newBlock.type === 'str' || newBlock.type === 'comment') {
                  newBlock.str = newBlock.str.replace(/[_]/g, ' ');
                }
                block.item.push(newBlock);
              }
            });
          }
        });
      }


      jsonResumeBlock.push(block);
    });
    return jsonResumeBlock;
  }

  assignType(chunk: string, contextArr: string[]): string {
    let type = null;
    if (this.isReserved(chunk)) {
      type = 'reserved';
    } else if (this.isMethod(chunk, contextArr)) {
      type = 'method';
    } else if (this.isObj(chunk)) {
      type = 'ref';
    } else if (this.isString(chunk)) {
      type = 'str';
    } else if (this.isNum(chunk, contextArr)) {
      type = 'num';
    } else if (this.isPropname(chunk)) {
      type = 'propname';
    } else if (this.isPropNameAlt(chunk, contextArr)) {
      type = 'propname code__propname--alt';
    } else if (this.isText(chunk, contextArr)) {
      type = 'text';
    } else if (this.isComment(chunk)) {
      type = 'comment';
    }
    return type;
  }

  setDots(item: { type: string; str: string }): { type: string; str: string } {
    if (!item) {
      item = {
        type: 'dot',
        str: ' ',
      };
    } else {
      if (item.str === ' ') {
        item.str = '·';
      }
      item.str += '·';
    }
    return item;
  }

  isText(str: string, arr: string[]): boolean {
    const textRegex = /^[.,;{}[\]()]+$/g;
    if (textRegex.test(str)) {
      return true;
    } else {
      const allowed = [':', '='];
      const strIndex = arr.indexOf(str);

      if (allowed.includes(arr[strIndex + 1])) {
        return true;
      } else if (arr[strIndex + 1]) {
        return arr[strIndex + 1].includes(str);
      }
    }
    return false;
  }

  isComment(str: any): boolean {
    return str.includes('//');
  }

  isPropNameAlt(str: string, contextArr: string[]): boolean {
    let isValid = false;
    contextArr.forEach((chunk: string) => {
      if (chunk.includes('()') && chunk.indexOf(str) === 0) {
        isValid = true;
      }
    });
    return isValid;
  }

  isPropname(str: string): boolean {
      const allowed = [
        'AleksandrAntonov',
        'onDeveloper',
      ];
      return allowed.includes(str);
  }

  isString(str: string): boolean {
   return str.lastIndexOf('\"') > 0;
  }

  isNum(str: string, contextArr: string[]) {
   return parseInt(str, 10);
  }

  isReserved(str: string): boolean {
    if (str) {
      const reserved: string[] = ['string', 'number', 'boolean', 'constructor', 'const', 'class', 'Date'];
      return reserved.includes(str.trim());
    }
    return false;
  }

  isMethod(str: string, contextArr: string[]): boolean {
    if (str && !contextArr.includes('//')) {
      const methods: string[] = ['new', 'extends', 'implements', 'export', 'return', '=', ':', '...'];
      return methods.includes(str.toLowerCase().trim());
    }
    return false;
  }

  isObj(str: string): boolean {
    if (str) {
      const objs: string[] = ['this'];
      return objs.includes(str.toLowerCase().trim());
    }
    return false;
  }
}
