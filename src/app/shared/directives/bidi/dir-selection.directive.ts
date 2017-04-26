import {
  AfterViewChecked, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges,
  ViewChildren
} from '@angular/core';
import {isNullOrUndefined} from "util";

declare var cssjanus: any;

import * as cssjanus from "cssjanus/src/cssjanus";

@Directive({
  selector: '[direction-selection]'
})
export class DirSelectionDirective implements OnChanges, AfterViewChecked, OnInit {

  @Input('direction-selection') direction: string;
  private prevDirection: string;

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
    this.el.nativeElement.querySelectorAll('*').forEach(el => {
      if (!el.getAttribute('bidi') || this.direction !== this.prevDirection) {
        el.setAttribute('bidi', this.direction);
        el.style.cssText = cssjanus.transform(el.style.cssText);
      }
    });
  }


}
