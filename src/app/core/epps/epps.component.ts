import {Component, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Epps} from "../../config/epp";
import {GridDefsService} from "../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-epps',
  templateUrl: './epps.component.html',
  styleUrls: ['./epps.component.scss']
})
export class EppsComponent implements OnInit {
  public addNew = false;
  public gridOptions: GridOptions = {};
  public gridOptions2: GridOptions = {};

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for(let prop in Epps.eppTable1){
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Epps.eppTable1[prop], {
        headerName: this.translateSrv.instant(Epps.eppTable1[prop].headerName)
      }));
    }
    this.gridOptions.rowData = [
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      }
    ];

    this.gridOptions2 = this.gridDefsSrv.initGridOptions();
    for(let prop in Epps.eppTable2){
      this.gridOptions2.columnDefs.push(Object.assign({}, { suppressFilter: true }, Epps.eppTable2[prop], {
        headerName: this.translateSrv.instant(Epps.eppTable2[prop].headerName)
      }));
    }
    this.gridOptions2.rowData = [
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      },
      {
        "eppNumber": "00044564",
        "rklStatus": "DISABLE",
        "disabled": true,
        "deviceNumber": "000000",
        "deviceName": ""
      }
    ];
  }

  ngOnInit() {

  }

  fitCols_epp_table1(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  fitCols_epp_table2(){
    this.gridOptions2.api.sizeColumnsToFit();
  }

}
