import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {Atm} from "../../../config/atm";

@Component({
  selector: 'ui-accessories-status',
  templateUrl: './accessories-status.component.html',
  styleUrls: ['./accessories-status.component.scss']
})
export class AccessoriesStatusComponent implements OnInit {

  private widgetsData: any[] = [
    {
      header: "atm.cash_pool",
      gridData: {
        rowData: [
          {
            "item": "1",
            "propriety": "FATAL",
            "inventory": 50,
            "coin": "NIS",
            "value": 100,
            "loaded": 1000,
            "withdrawed": 200,
            "rejected": 5,
            "left": 795
          },
          {
            "item": "2",
            "propriety": "FATAL",
            "inventory": 25,
            "coin": "NIS",
            "value": 100,
            "loaded": 1000,
            "withdrawed": 200,
            "rejected": 5,
            "left": 795
          },
          {
            "item": "3",
            "propriety": "FATAL",
            "inventory": 66,
            "coin": "NIS",
            "value": 100,
            "loaded": 1000,
            "withdrawed": 200,
            "rejected": 5,
            "left": 795
          }
        ]
      },
      footer: {
        "atm.total": "150,000",
        "atm.last_successful": {time: true, value: "15 may 2017 22:15"}
      },
      width: 50,
      props: Atm.Accessories.CashPool
    },
    {
      header: "atm.balance_of_last_strokes",
      gridData: {
        rowData: [
          {
            "value": 100,
            "propriety": "FATAL",
            "coin": "NIS",
            "amount": 100,
            "difference": 50
          }
        ]
      },
      footer: {"atm.total": "15,000", "atm.alert": "7,000"},
      width: 50,
      props: Atm.Accessories.LastStrokes
    },
    {
      header: "atm.printers",
      gridData: {
        rowData: [
          {
            item: "item1",
            propriety: "FATAL"
          },
          {
            item: "item2",
            propriety: "FATAL"
          }
        ]
      },
      width: 100 / 3,
      props: Atm.Accessories.Printers
    },
    {
      header: "atm.checks",
      gridData: {
        rowData: [
          {
            item: "item1",
            propriety:"FATAL",
            inventory:"67",
            counter:0
          },
          {
            item: "item2",
            propriety:"FATAL",
            inventory:"67",
            counter:0
          },
          {
            item: "item3",
            propriety:"FATAL",
            inventory:"67",
            counter:0
          }
        ]
      },
      footer:{"atm.last_successful":{time:true,value:"oct 10 1976"},"atm.last_reset":{time:true,value:"oct 10 1926"}},
      width: 100 / 3,
      props: Atm.Accessories.Checks
    },
    {
      header: "atm.other",
      gridData: {
        rowData: [
          {
            item: "item1",
            propriety:"FATAL",
            inventory:"67",
            counter:0
          },
          {
            item: "item2",
            propriety:"FATAL",
            inventory:"67",
            counter:0
          },
          {
            item: "item3",
            propriety:"FATAL",
            inventory:"67",
            counter:0
          }
        ]
      },
      width: 100 / 3,
      footer:{"atm.last_reset":{time:true,value:"oct 10 1926"}},
      props: Atm.Accessories.Other
    }
  ];

  constructor(private translateSrv: TranslateService) {
  }

  ngOnInit() {
    this.initColDefs();
  }

  initColDefs() {
    this.widgetsData.forEach(widget => {
      widget.gridData.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
      widget.gridData.enableSorting = true;
      widget.gridData.columnDefs = [];
      for (var prop in widget.props) {
        widget.gridData.columnDefs.push(
          Object.assign({},
            {suppressFilter: true},
            widget.props[prop],
            {
              headerName: this.translateSrv.instant(widget.props[prop].headerName)

            }));
      }
    });
  }

  ngOnDestroy() {
    this.widgetsData = [];
  }

}
