import {Component, OnInit, OnDestroy} from '@angular/core';
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {Hsm} from "../../../config/hsm";
import {TranslateService} from "@ngx-translate/core";
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {IStore} from "../../../../store/index";
import {HsmActions} from "../../../../store/actions/hsms-actions";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ui-hsm-status',
  templateUrl: './hsm-status.component.html',
  styleUrls: ['./hsm-status.component.scss']
})
export class HsmStatusComponent implements OnInit,OnDestroy{
  public addNew = false;
  public data;
  public selectedItems = 0;
  public gridOptions: GridOptions = {};
  public gridOptions2: GridOptions = {};
  @select(['hsm', 'status']) $hsm_status: Observable<any>;
  private $hsm_status_ref;
  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService,private ngRedux: NgRedux<IStore>) {
    this.ngRedux.dispatch({type:HsmActions.HSM_GET});
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for(let prop in Hsm.status.hsmTable){
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Hsm.status.hsmTable[prop], {
        headerName: this.translateSrv.instant(Hsm.status.hsmTable[prop].headerName)
      }));
    }

    this.gridOptions2 = this.gridDefsSrv.initGridOptions();
    for(let prop in Hsm.status.linkTable){
      this.gridOptions2.columnDefs.push(Object.assign({}, { suppressFilter: true }, Hsm.status.linkTable[prop], {
        headerName: this.translateSrv.instant(Hsm.status.linkTable[prop].headerName)
      }));
    }
    this.gridOptions2.rowSelection = 'multiple';
    this.gridOptions.rowData = [
      {
        "directive": "ENTER Input",
        "main": "main",
        "serial": "1",
        "ipAddress": "10.0.0.12",
        "portNumber": "1024",
        "hsmStatus": "DISABLE",
        "sessionNumber": 2,
      },
    ];
    this.gridOptions2.rowData = [
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


  fitCols_link_table(){
    this.gridOptions2.api.sizeColumnsToFit();
  }

  fitCols_hsm_table(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  selection(e) {
    this.selectedItems = this.gridOptions2.api.getSelectedRows().length;
  }

  ngOnInit(){
    this.$hsm_status_ref = this.$hsm_status.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        console.log(state);
        this.data = state
      }
    });
  }

  ngOnDestroy(){
    this.$hsm_status_ref.unsubscribe();
  }
}
