import {Component, Input} from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'ui-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  @Input() get show() {return this.showValue;}
  public data = [];
  private showValue = true;
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0',
    fitWidth: true,
    originLeft: true
  };
  set show(val) {
    this.showValue = val;
  }

  constructor() {
    this.data=[
      {"title": "aaaa", "data":  [
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }
      ]},
      {"title": "aaaa", "data":  [{ "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }]},
      {"title": "aaaa", "data":  [{ "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }]},
      {"title": "aaaa", "data":  [
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }
      ]},
      {"title": "aaaa", "data":  [
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
      ]},
      {"title": "aaaa", "data":  [{ "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }]},
      {"title": "aaaa", "data":  [{ "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }]},
      {"title": "aaaa", "data":  [
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  },
        { "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }
      ]},
      {"title": "aaaa", "data":  [{ "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }]},
      {"title": "aaaa", "data":  [{ "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }]},
      {"title": "aaaa", "data":  [{ "key": "key name", "value": "NIS", "type" : "CurrencyCode"  }]},
    ];
  }

}
