import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

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
      title: 'id',
      field: 'id',
      size:'small'
    },
    {
      title: 'name',
      field: 'name',
      size:'medium'
    },
    {
      title: 'status',
      field: 'status',
      size:'medium'
    },
    {
      title: 'reason',
      field: 'reason',
      size:'medium'
    },
    {
      title: 'last withdrawal',
      field: 'lastWithdrawal',
      size:'small'
    },
    {
      title: 'remaining cash',
      field: 'remainingCash',
      size:'small'
    },
    {
      title: 'retained cards',
      field: 'retainedCards',
      size:'small'
    },
    {
      title: 'card settlement',
      field: 'cardSettlement',
      size:'small'
    },
    {
      title: 'branch',
      field: 'branch',
      size:'small'
    },{
      title: 'last activity',
      field: 'lastActivity',
      size:'small'
    },{
      title: 'last settlement',
      field: 'lastSettlement',
      size:'small'
    }

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
