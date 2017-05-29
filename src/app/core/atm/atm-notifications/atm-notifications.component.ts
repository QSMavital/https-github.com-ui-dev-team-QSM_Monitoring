import {Component, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {AgDateShortComponent} from "../../../shared/components/ag-date-short/ag-date-short.component";
import {AgTimeComponent} from "../../../shared/components/ag-time/ag-time.component";
import {AgStatusComponent} from "../../../shared/components/ag-status/ag-status.component";

@Component({
  selector: 'ui-atm-notifications',
  templateUrl: './atm-notifications.component.html',
  styleUrls: ['./atm-notifications.component.scss']
})
export class AtmNotificationsComponent implements OnInit {

  public gridOptions: GridOptions;

  constructor() {
  }

  ngOnInit() {
    /*this.gridOptions = {
      columnDefs: [
        {headerName: 'atms.terminalId', field: 'atmNo', width: 80, suppressSizeToFit: true},
        {
          headerName: 'atms.date',
          field: 'date',
          width: 120,
          suppressSizeToFit: true,
          cellRendererFramework: AgDateShortComponent
        }, {
          headerName: 'atms.time',
          field: 'time',
          width: 120,
          suppressSizeToFit: true,
          cellRendererFramework: AgTimeComponent
        }, {
          headerName: 'atms.code', field: 'eventCode', width: 100, suppressSizeToFit: true
        }, {
          headerName: 'atms.spec', field: 'eventTextEn', width: 200
        }, {
          headerName: 'atms.fullSpec', field: 'eventTextLocal', width: 200
        }, {
          headerName: 'atms.eventDestinations', field: 'eventDestinations', width: 200
        }, {
          headerName: 'atms.device', field: 'device', width: 200
        }, {
          headerName: 'atms.device', field: 'device', width: 200
        }, {
          headerName: 'atms.severity', field: 'eventSeverity', width: 200, cellRendererFramework: AgStatusComponent
        }
      ]
    }*/
  }

  ngOnDestroy() {
  }

/*  fitCols() {
    this.gridOptions.api.sizeColumnsToFit();
  }*/

}
