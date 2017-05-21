import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  private ddOptions:any[] = [
    {
      label:'something',
      value:{id:'1'}
    },
    {
      label:'something_else',
      value:{id:'2'}
    }
  ];
  private ddModel:any;

  private tableMock = [
    {
      id: '345563',
      name: 'Notting Hill Gate, London',
      status: 'fatal',
      reason: 'offline',
      lastWithdrawal: '05/07 13:30',
      remainingCash: '100,000',
      retainedCards: '0',
      cardSettlement: '05/07 13:30',
      branch: '3466',
      lastActivity: '05/07 13:30',
      lastSettlement: '05/07 13:30'
    }, {
      id: '345564',
      name: 'Princes St, Edinburgh',
      status: 'fatal',
      reason: 'offline',
      lastWithdrawal: '05/07 13:30',
      remainingCash: '100,000',
      retainedCards: '0',
      cardSettlement: '05/07 13:30',
      branch: '3466',
      lastActivity: '05/07 13:30',
      lastSettlement: '05/07 13:30'
    }
  ];
  private colDef = [
    {
      title: 'general.id',
      field: 'id',
      size:'small'
    },
    {
      title: 'general.name',
      field: 'name',
      size:'medium'
    },
    {
      title: 'general.status',
      field: 'status',
      size:'medium'
    },
    {
      title: 'general.reason',
      field: 'reason',
      size:'medium'
    },
    {
      title: 'general.lastWithdrawal',
      field: 'lastWithdrawal',
      size:'small'
    },
    {
      title: 'general.remainingCash',
      field: 'remainingCash',
      size:'small'
    },
    {
      title: 'general.retainedCards',
      field: 'retainedCards',
      size:'small'
    },
    {
      title: 'general.cardSettlement',
      field: 'cardSettlement',
      size:'small'
    },
    {
      title: 'general.branch',
      field: 'branch',
      size:'small'
    },{
      title: 'general.lastActivity',
      field: 'lastActivity',
      size:'small'
    },{
      title: 'general.lastSettlement',
      field: 'lastSettlement',
      size:'small'
    }

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
