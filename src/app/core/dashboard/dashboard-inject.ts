import { Type } from '@angular/core';

export class DashboardInject {
  constructor(public component: Type<any>, public data: any) {}
}

export interface DashComponent {
  data: any;
}
