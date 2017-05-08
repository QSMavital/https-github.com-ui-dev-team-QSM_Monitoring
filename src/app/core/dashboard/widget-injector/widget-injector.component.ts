import {Component, OnInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver} from '@angular/core';
import {DashboardInject} from "../dashboard-inject";
import {OnlineStatusComponent} from "../online-status/online-status.component";
import {ConnectionStatusComponent} from "../connection-status/connection-status.component";
import {DevicesStatusComponent} from "../devices-status/devices-status.component";
import {IssuerActionsStatusComponent} from "../issuer-actions-status/issuer-actions-status.component";
import {ActionsStatusComponent} from "../actions-status/actions-status.component";
import {OnlineSmallComponent} from "../closed-bar-widgets/online-small/online-small.component";
import {ConnectionSmallComponent} from "../closed-bar-widgets/connection-small/connection-small.component";
import {ActionsSmallComponent} from "../closed-bar-widgets/actions-small/actions-small.component";


@Component({
  selector: 'ui-widget-injector',
  templateUrl: './widget-injector.component.html',
  styleUrls: ['./widget-injector.component.scss']
})
export class WidgetInjectorComponent implements OnInit {
  @ViewChild('component', {read: ViewContainerRef}) tpl;
  @Input('data') data;
  @Input('widget') widget;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    let components = {
      ConnectionStatusComponent,
      DevicesStatusComponent,
      OnlineStatusComponent,
      IssuerActionsStatusComponent,
      ActionsStatusComponent,
      OnlineSmallComponent,
      ConnectionSmallComponent,
      ActionsSmallComponent
    };

    let Obj = new DashboardInject(components[this.widget], this.data);
    let componentFactory =
      this._componentFactoryResolver.resolveComponentFactory(Obj.component);


    let componentRef = this.tpl.createComponent(componentFactory);
    if (Obj.data)
      componentRef.instance.data = Obj.data;
  }

}
