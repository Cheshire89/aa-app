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

      if (RegExp(/\'+(?=[\w]).+/g).test(str)) {
        index = str.indexOf("'");
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
      let splitString = str.split(/\s/);
      splitString.forEach((chunk: string) => {
        if (chunk.length === 0) {
          block.item[0] = this.setDots(block.item[0]);
        } else {
          // console.log('chunk', chunk);
          const matches = chunk.match(/[()\.](?=[\w+]).\w+|[\w]+|^[\/|'].+|[.,;:|[\]({)}=/]+/gi);
          // console.log('matches', matches);
          if (matches) {
            // console.log('---> ' + index, matches);
            splitString = splitString.filter((val: string) => val.length > 0);

            let type = null;
            matches.forEach((match) => {
              type = this.assignType(match, splitString, str.trim());
              block.item.push({
                type,
                str: match,
              });
            });
          }
        }
      });

      jsonResumeBlock.push(block);
    });
    return jsonResumeBlock;
  }

  assignType(chunk: string, contextArr: string[], str: string): string {
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
    } else if (this.isPropname(chunk, contextArr)) {
      type = 'propname';
    } else if (this.isPropNameAlt(chunk, contextArr)) {
      type = 'propname code__propname--alt';
    } else if (this.isText(chunk, contextArr)) {
      type = 'text';
    } else if (this.isComment(str)) {
      type = 'comment';
    }
    return type;
  }

  setDots(item: { type: string; str: string }): { type: string; str: string } {
    if (!item) {
      item = {
        type: 'dot',
        str: '·',
      };
    } else {
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

  isPropname(str: string, contextArr: string[]): boolean {
    const strIndex = contextArr.indexOf(str);
    if (strIndex !== -1) {
      const allowed = ['class', 'implements'];
      if (allowed.includes(contextArr[strIndex - 1])) {
        return true;
      }
    }
    return false;
  }

  isString(str: string): boolean {
    const indexOfQuote = str.lastIndexOf("'");
    if (indexOfQuote > 1) {
      this.concatString += this.concatString;
      this.isStr = false;
      return true;
    } else if (indexOfQuote === 0 || this.isStr) {
      this.concatString = str;
      this.isStr = true;
      return true;
    } else {
      return false;
    }
  }

  isNum(str: string, contextArr: string[]) {
    contextArr = contextArr.slice(contextArr.indexOf('//'));
    if (contextArr.length > 0) {
      return parseInt(str, 10) && !contextArr.includes('//');
    } else {
      return parseInt(str, 10);
    }
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
