import {
  AfterViewChecked, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges,
  ViewChildren
} from '@angular/core';
import {isNullOrUndefined} from "util";

// declare var cssjanus: any;

import * as cssjanus from "cssjanus/src/cssjanus";

@Directive({
  selector: '[direction-selection]'
})
export class DirSelectionDirective implements OnChanges, AfterViewChecked, OnInit {

  @Input('direction-selection') direction: string;
  private prevDirection: string;
  private init: boolean = true;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.prevDirection = this.direction;
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.direction.currentValue !== change.direction.previousValue && !isNullOrUndefined(change.direction.currentValue)) {
      this.prevDirection = change.direction.previousValue;
    }
  }

  ngAfterViewChecked() {
    if(isNullOrUndefined(this.prevDirection) && !(this.init&&this.direction=='rtl')){return}
    let styles = [].slice.call(document.querySelectorAll('style'));
    styles.forEach((el) => {
      let selfCss = el.innerText.indexOf('.qsm_self')>-1;
      if (selfCss &&(!el.getAttribute('bidi') || this.direction !== this.prevDirection)) {
        el.setAttribute('bidi', this.direction);
        el.innerText = cssjanus.transform(el.innerText);
      }
    });
    this.prevDirection=this.direction;
  }


}
