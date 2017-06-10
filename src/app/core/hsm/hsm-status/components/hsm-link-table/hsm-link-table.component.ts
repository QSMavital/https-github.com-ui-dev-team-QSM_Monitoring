import {Component, Input, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Hsm} from "../../../../../config/hsm";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-hsm-link-table',
  templateUrl: './hsm-link-table.component.html',
  styleUrls: ['./hsm-link-table.component.scss']
})
export class HsmLinkTableComponent implements OnInit {
  @Input() public gridData: any = {};
  public gridOptions: GridOptions = {};
  public selectedItems = 0;

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for(let prop in Hsm.status.linkTable){
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Hsm.status.linkTable[prop], {
        headerName: this.translateSrv.instant(Hsm.status.linkTable[prop].headerName)
      }));
    }
    this.gridOptions.rowSelection = 'multiple';
    this.gridOptions.rowData = [
      {
        "hsmType": "1",
        "serial": "2",
        "type": "Regular",
        "status": "Active",
        "directive": ""
      },
      {
        "hsmType": "2",
        "serial": "3",
        "type": "Regular",
        "status": "Open",
        "directive": ""
      },
      {
        "hsmType": "3",
        "serial": "5",
        "type": "Regular",
        "status": "Active",
        "directive": ""
      }
    ];
  }

  ngOnInit() {
  }

  fitCols_link_table(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  selection(e) {
    this.selectedItems = this.gridOptions.api.getSelectedRows().length;
  }

  ngOnChanges(newValue) {

    if(!isNullOrUndefined(newValue.gridData)&&!isNullOrUndefined(newValue.gridData.currentValue)&&!isNullOrUndefined(this.gridOptions.api)){
      let rowData = this.gridData;
      this.gridOptions.api.setRowData(rowData);

    }
  }

}

/*{
  "hsmSerialId": "3567/4444",
  "sessionNumber": 1,
  "sessionType": "REGULAR",
  "sessionStatus": "NONE",
  "sessionRequest": "NONE"
}*/
