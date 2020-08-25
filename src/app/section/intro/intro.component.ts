import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  private nouns = ['websites', 'ux/ui', 'api', 'webapps', 'things'];
  animationFinished: boolean;
  noun = '';
  nextNoun: string;

  constructor() {}

  ngOnInit() {
    this.onScramble();
    setTimeout(() => {
      setInterval(() => {
        if (!this.animationFinished) {
          this.onScramble();
        }
      }, 3000);
    }, 3000);
  }

  private async onScramble() {
    this.animationFinished = true;
    // // safeguard agains loop running out of scope caused by UTF range being randomized
    // let keepgoing = true;
    // setTimeout(() => (keepgoing = false), 3500);

    this.nextNoun = this.getNextNoun();
    const len = this.nextNoun.length > this.noun.length ? this.nextNoun : this.noun;

    for (let i = 0; i < len.length; i++) {
      // if (!keepgoing) {
      //   break;
      // }
      let finished = false;
      const range: { start: number; target: number } = {
        start: this.getCharCode(this.noun, i),
        target: this.getCharCode(this.nextNoun, i),
      };

      if (range.start === range.target) {
        // -35 is buffer to extend animation
        range.start = this.getRandomUTF16Num() - 35;
      }

      // animate character scroll
      // 32 is a space char code
      if (range.target !== 32) {
        await this.animateCharChange(range.start, range.target, i);
        continue;
      } else {
        finished = this.setNoun(i, ' ');
        if (finished) {
          break;
        }
      }
    }
    this.animationFinished = false;
  }

  private async animateCharChange(start: number, target: number, index: number) {
    const check = (i) => (start < target ? i <= target : i >= target);

    for (let j = start; check(j); start < target ? j++ : j--) {
      let finished = false;
      await this.delay(5);
      finished = this.setNoun(index, String.fromCharCode(j));
      if (finished) {
        break;
      }
    }
  }

  private delay(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  private getCharCode(str: string, i: number) {
    return str.charCodeAt(i) ? str.charCodeAt(i) : ' '.charCodeAt(0);
  }
  // return random number from 33 to 126 (within UTF-16 range)
  private getRandomUTF16Num(): number {
    const firstRandom = Math.floor(Math.random() * 64) + 33;
    const secondRandom = Math.floor(Math.random() * 91) + 126;
    const nums = [firstRandom, secondRandom];
    return nums[Math.floor(Math.random() * nums.length)];
  }

  private getNextNoun() {
    let index = this.nouns.indexOf(this.noun);
    if (index < this.nouns.length - 1) {
      index++;
    } else {
      index = 0;
    }
    return this.nouns[index];
  }

  private replaceCharAt(str, index, char) {
    const arr = str.split('');
    arr[index] = char;
    return arr.join('');
  }

  private setNoun(index: number, char: string) {
    this.noun = this.replaceCharAt(this.noun, index, char).toLowerCase();
    if (this.noun.trim() === this.nextNoun) {
      this.noun = this.noun.trim();
      return true;
    }

    return false;
  }
}
