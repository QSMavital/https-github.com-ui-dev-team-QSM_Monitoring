import {Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
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
export class HsmLinkTableComponent {
  @Input() gridData: any = {};
  @Output() selectedSessions = new EventEmitter();
  public gridOptions: GridOptions = {};

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for(let prop in Hsm.status.sessions){
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Hsm.status.sessions[prop], {
        headerName: this.translateSrv.instant(Hsm.status.sessions[prop].headerName)
      }));
    }
  }

  fitCols_link_table(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  selection(e) {
    this.selectedSessions.emit(this.gridOptions.api.getSelectedRows());
  }

  ngOnChanges(newValue) {

    if(!isNullOrUndefined(newValue.gridData)&&!isNullOrUndefined(newValue.gridData.currentValue)&&!isNullOrUndefined(this.gridOptions.api)){
      let rowData = this.gridData;
      this.gridOptions.api.setRowData(rowData);

    }
  }
}

