export const Atms = {
  Tabs:{
    INVENTORY_OF_ATMS: {label: 'atms.tabs.inventory', state: 'inventory'},
    status: {label: 'atms.tabs.status', state: 'status'},
    ALL_ALERTS: {label: 'atms.tabs.notifications', state: 'notifications'},
    ALL_EVENTS: {label: 'atms.tabs.events', state: 'events'},
    ALL_MOVEMENTS: {label: 'atms.tabs.transactions', state: 'transactions'}
  },
  Inventory:{
    atmNo:{headerName: "atms.inventory.atmNo", field: "atmNo", width: 100},
    atmName:{headerName: "atms.inventory.atmName", field: "atmName", width: 100},
    status:{headerName: "atms.inventory.status", field: "status", width: 100},
    reason:{headerName: "atms.inventory.reason", field: "reason", width: 100},
    lastWithdrawal:{headerName: "atms.inventory.lastWithdrawal", field: "lastWithdrawal", width: 100},
    remainingCash:{headerName: "atms.inventory.remainingCash", field: "remainingCash", width: 100},
    retainedCards:{headerName: "atms.inventory.retainedCards", field: "retainedCards", width: 100},
    cardSettlement:{headerName: "atms.inventory.cardSettlement", field: "cardSettlement", width: 100},
    lastActivity:{headerName: "atms.inventory.lastActivity", field: "lastActivity", width: 100},
  }
}

