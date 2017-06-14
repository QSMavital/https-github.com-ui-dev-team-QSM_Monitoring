import {Component, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Epps} from "../../config/epp";
import {GridDefsService} from "../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../store/index";
import {EppActions} from "../../../store/actions/epp-actions";

@Component({
  selector: 'ui-epps',
  templateUrl: './epps.component.html',
  styleUrls: ['./epps.component.scss']
})
export class EppsComponent implements OnInit {
  public addNew = false;
  public gridOptions: {
    grid_left: GridOptions,
    grid_right: GridOptions
  };

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService,private ngRedux: NgRedux<IStore>) {
    this.ngRedux.dispatch({type:EppActions.EPP_GET});

    this.initGridDefs();

  }

  ngOnInit() {

  }

  initGridDefs(){
    this.gridOptions.grid_left = this.gridDefsSrv.initGridOptions();
    this.gridOptions.grid_right = this.gridDefsSrv.initGridOptions();

    for (let prop in Epps.eppTable) {
      this.gridOptions.grid_right.columnDefs.push(Object.assign({}, {suppressFilter: true}, Epps.eppTable[prop], {
        headerName: this.translateSrv.instant(Epps.eppTable[prop].headerName)
      }));
      this.gridOptions.grid_left.columnDefs.push(Object.assign({}, {suppressFilter: true}, Epps.eppTable[prop], {
        headerName: this.translateSrv.instant(Epps.eppTable[prop].headerName)
      }));
    }
  }

  fitCols_epp_right() {
    this.gridOptions.grid_right.api.sizeColumnsToFit();
  }

  fitCols_epp_left() {
    this.gridOptions.grid_left.api.sizeColumnsToFit();
  }

}
