import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {isNullOrUndefined} from "util";
import {AgTranslateMapComponent} from "../../../../../shared/components/ag-translate-map/ag-translate-map.component";

@Component({
  selector: 'ui-atm-status-keys',
  templateUrl: './atm-status-keys.component.html',
  styleUrls: ['./atm-status-keys.component.scss']
})
export class AtmStatusKeysComponent implements OnInit, OnChanges {
  @Input() keys_data:any;
  public gridOptions:GridOptions;
  public infos: any[] = [];
  constructor() { }

  ngOnInit() {

  }

  fitCols_Keys() {
    this.gridOptions.api.sizeColumnsToFit();
  }


  ngOnChanges(newValue){
    if(!isNullOrUndefined(newValue.keys_data)&&!isNullOrUndefined(newValue.keys_data.currentValue)){
      this.gridOptions= {
        columnDefs: [
          {headerName: "Health", field: "keyType", width: 200, suppressSizeToFit: true,cellRendererFramework: AgTranslateMapComponent},
          {headerName: "Key type", field: "keyStatus", width: 150,cellRendererFramework: AgTranslateMapComponent},
          {headerName: "KVC", field: "kcv", width: 150},
        ],
        rowData: this.keys_data["keys"],
        enableColResize: true,
        getRowHeight:(() => {
          return 32
        })
      };
      for (var key in this.keys_data){
        if(key !== 'keys'){
          if (key === 'eppUid') {
            this.infos.push({key: `enums.${key}`, value: this.keys_data[key]})
          } else {
            this.infos.push({key: `enums.${key}`, value: new Date(this.keys_data[key]).toLocaleString()})
          }
        }
      }
    }
  }
}

/*{
  "keys": [
  {
    "keyType": "MASTER",
    "keyStatus": "CANCELLED",
    "kcv": "000000"
  },
  {
    "keyType": "ENC",
    "keyStatus": "CANCELLED",
    "kcv": "000000"
  },
  {
    "keyType": "AUTH",
    "keyStatus": "CANCELLED",
    "kcv": "000000"
  }
],
  "eppUid": 52364862,
  "lastWorkingKeyChange ": 1495613739356
}*/
