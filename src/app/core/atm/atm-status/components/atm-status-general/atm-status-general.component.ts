import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {AgStatusComponent} from "../../../../../shared/components/ag-status/ag-status.component";
import {isNullOrUndefined} from "util";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-atm-status-general',
  templateUrl: './atm-status-general.component.html',
  styleUrls: ['./atm-status-general.component.scss']
})
export class AtmStatusGeneralComponent implements OnInit, OnChanges {
  @Input() general_data: any;
  public gridOptions: GridOptions;
  constructor(private gridDefsSrv: GridDefsService,private translateSrv: TranslateService) {

    this.gridOptions = this.gridDefsSrv.initGridOptions();
    this.gridOptions.columnDefs =  [
      {
        headerName: this.translateSrv.instant('general.name'),
        field: "name",
        width: 200,
        suppressSizeToFit: true
      },
      {
        headerName: this.translateSrv.instant('general.status'),
        field: "status",
        cellRendererFramework: AgStatusComponent
      },
    ];
  }

  ngOnInit() {

  }

  fitCols_General() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue){
    if(!isNullOrUndefined(newValue.general_data)&&!isNullOrUndefined(newValue.general_data.currentValue)){
      let rowData = [
        {
          "name":  this.translateSrv.instant('atm.status.general.terminalStatus'),
          "status": this.general_data.terminalStatus
        },
        {
          "name": this.translateSrv.instant('atm.status.general.targetTerminalStatus'),
          "status": this.general_data.targetTerminalStatus
        },
        {
          "name": this.translateSrv.instant('atm.status.general.communicationlStatus'),
          "status":this.general_data.communicationlStatus
        },
        {
          "name": this.translateSrv.instant('atm.status.general.ipAddress'),
          "status": this.general_data.ipAddress
        },
        {
          "name": this.translateSrv.instant('atm.status.general.atmModel'),
          "status": this.general_data.atmModel
        },
        {
          "name": this.translateSrv.instant('atm.status.general.softwareVersion'),
          "status": this.general_data.softwareVersion
        },
        {
          "name":this.translateSrv.instant('atm.status.general.configId'),
          "status": this.general_data.configId
        },
        {
          "name": this.translateSrv.instant('atm.status.general.loadStage'),
          "status": this.translateSrv.instant(`loadStage.${this.general_data.loadStage}`)
        }
      ];
      this.gridOptions.api.setRowData(rowData);
    }
  }

}

// todo: get the data form QSM
/*{
 "terminalStatus": "OFF_LINE",
 "targetTerminalStatus": "OFF_LINE",
 "communicationlStatus": "OFF_LINE",
 "ipAddress": "127.0.0.1",
 "atmModel": "0000",
 "softwareVersion": "",
 "configId": "0000",
 "loadStage": "NONE",
 "loadVariant": "",
 "loadNumber": "00"
 }*/
