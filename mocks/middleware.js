module.exports = function (req, res, next) {
  //
  var delay = 1000;
  setTimeout(function () {

    if (req.url.indexOf('/general/settingsUser/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        settingsUser
      ));
    }
    else if (req.url.indexOf('/general/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        customerGeneral
      ));
    }
    else if (req.url.indexOf('/main/connection/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        mainConnection
      ));
    }
    else if (req.url.indexOf('/main/deviceStatus/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        device_status
      ));
    }
    else if (req.url.indexOf('/main/onlineStatus/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        onlineStatus
      ));
    }
    else if (req.url.indexOf('/main/issuerActionStatus/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        issuerActionStatus
      ));
    }
    else if (req.url.indexOf('/main/actionStatus/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        actionStatus
      ));
    }
    else if (req.url.indexOf('/atms/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        atms_inventory
      ));
    }
    else if (req.url.indexOf('/atms/action') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        {"result": "OK"}
      ));
    }
    else if (req.url.indexOf('/events/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        atms_events
      ));
    }
    else if (req.url.indexOf('/transactions/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        atms_transactions
      ));
    }
    else if (req.url.indexOf('/atm/atmStatus/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        atm_status
      ));
    }
    else if (req.url.indexOf('/atm/atmAccessories/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        atm_accessories
      ));
    }
    else if (req.url.indexOf('/atm/retainedCards/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        atm_retainedCards
      ));
    }
    else if (req.url.indexOf('/transactions/transaction/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        transaction
      ));
    }
    else if (req.url.indexOf('/atm/settings/post') !== -1 || req.url.indexOf('/api/atm/settings/patch') !== -1 || req.url.indexOf('/api/hsm/patch') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        {"result": "OK"}
      ));
    }
    else if (req.url.indexOf('/atm/settings/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        atm_settings
      ));
    }
    else if (req.url.indexOf('/api/hsm/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        hsm_status
      ));
    }
    else if (req.url.indexOf('/api/hsm/statistics/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        hsm_statistics
      ));
    }
    else if (req.url.indexOf('/api/epp/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        epps
      ));
    }
    else {
      next();
    }

  }, delay);


};


var settingsUser = {
  language: "en_US",
  menu: ["MAIN", "ATMS", "HSMS", "EPPS", "COMMUNICATION", "REPORTS"],
  atmsCustomization: {
    "atmsTabs": [
      {
        "field": "atmsSupply",
        "visible": true
      }, {
        "field": "atmsStatus",
        "visible": true
      }, {
        "field": "alerts",
        "visible": true
      }, {
        "field": "events",
        "visible": true
      }, {
        "field": "transactions",
        "visible": true
      }
    ],
    "atmsFilters": {
      "status": [
        "DISABLE",
        "GOOD",
        "ATTENTION",
        "FATAL",
        "OPERATOR"
      ],
      "group": [0],
      "area": [
        "NONE",
        "NORTH",
        "SOUTH",
        "CENTER",
        "JERUSALEM"
      ]
    },
    "atmsSupply": [
      {
        "field": "terminalId",
        "visible": true
      }, {
        "field": "atmName",
        "visible": true
      }, {
        "field": "terminalStatus",
        "visible": true
      }, {
        "field": "closedReason",
        "visible": true
      }, {
        "field": "dispenserColor",
        "visible": false
      }, {
        "field": "cashDepositColor",
        "visible": false
      }, {
        "field": "checkDepositColor",
        "visible": false
      }, {
        "field": "printerColor",
        "visible": false
      }, {
        "field": "receiptColor",
        "visible": false
      }, {
        "field": "cardReaderColor",
        "visible": false
      }, {
        "field": "eppColor",
        "visible": false
      }, {
        "field": "lastMessage",
        "visible": false
      }, {
        "field": "treatmentStartDate",
        "visible": false
      }, {
        "field": "responsibility",
        "visible": false
      }, {
        "field": "terminalGroup",
        "visible": false
      }, {
        "field": "area",
        "visible": false
      }, {
        "field": "terminalGroup",
        "visible": false
      }, {
        "field": "lastDepositSettlement",
        "visible": false
      }, {
        "field": "lastCheckSettlement",
        "visible": false
      }, {
        "field": "totalDispensed",
        "visible": false
      }, {
        "field": "checkTotalBin1",
        "visible": false
      }, {
        "field": "checkTotalBin2",
        "visible": false
      }, {
        "field": "lastGoodWdrl",
        "visible": true
      }, {
        "field": "totalRemaining",
        "visible": true
      }, {
        "field": "cardsRetained",
        "visible": true
      }, {
        "field": "lastCardSettlement",
        "visible": true
      }, {
        "field": "branch",
        "visible": true
      }, {
        "field": "lastGoodTransaction",
        "visible": true
      }, {
        "field": "lastSettlement",
        "visible": true
      }

    ],
    "atmsStatus": [
      {
        "field": "terminalId",
        "visible": true
      }, {
        "field": "atmName",
        "visible": true
      }, {
        "field": "terminalStatus",
        "visible": true
      }, {
        "field": "closedReason",
        "visible": true
      }, {
        "field": "cashDepositColor",
        "visible": true
      }, {
        "field": "checkDepositColor",
        "visible": true
      }, {
        "field": "printerColor",
        "visible": true
      }, {
        "field": "cardReaderColor",
        "visible": true
      }, {
        "field": "eppColor",
        "visible": true
      }, {
        "field": "treatmentStartDate",
        "visible": true
      }, {
        "field": "responsibility",
        "visible": true
      }, {
        "field": "branch",
        "visible": true
      }, {
        "field": "belong",
        "visible": true
      }, {
        "field": "dispenserColor",
        "visible": false
      }, {
        "field": "receiptColor",
        "visible": false
      }, {
        "field": "lastMessage",
        "visible": false
      }, {
        "field": "terminalGroup",
        "visible": false
      }, {
        "field": "area",
        "visible": false
      }, {
        "field": "terminalGroup",
        "visible": false
      }, {
        "field": "lastDepositSettlement",
        "visible": false
      }, {
        "field": "lastCheckSettlement",
        "visible": false
      }, {
        "field": "totalDispensed",
        "visible": false
      }, {
        "field": "checkTotalBin1",
        "visible": false
      }, {
        "field": "checkTotalBin2",
        "visible": false
      }, {
        "field": "lastGoodWdrl",
        "visible": false
      }, {
        "field": "totalRemaining",
        "visible": false
      }, {
        "field": "cardsRetained",
        "visible": false
      }, {
        "field": "lastCardSettlement",
        "visible": false
      }, {
        "field": "lastGoodTransaction",
        "visible": false
      },
      {
        "field": "lastSettlement",
        "visible": false
      }
    ],
    "alerts": [
      {
        "field": "atmNo",
        "visible": true
      },
      {
        "field": "eventSeverity",
        "visible": true
      },
      {
        "field": "date",
        "visible": true
      },
      {
        "field": "time",
        "visible": true
      },
      {

        "field": "eventDestinations",
        "visible": true
      },
      {
        "field": "eventCode",
        "visible": true
      },
      {
        "field": "eventTextEn",
        "visible": true
      },
      {
        "field": "eventTextLocal",
        "visible": true
      },
      {
        "field": "device",
        "visible": false
      }
    ],
    "events": [
      {
        "field": "atmNo",
        "visible": true
      },
      {
        "field": "date",
        "visible": true
      },
      {
        "field": "time",
        "visible": true
      },
      {
        "field": "eventCode",
        "visible": true
      },
      {
        "field": "eventTextEn",
        "visible": true
      },
      {
        "field": "eventTextLocal",
        "visible": true
      },
      {
        "field": "eventDestinations",
        "visible": false
      },
      {
        "field": "eventSeverity",
        "visible": false
      },
      {
        "field": "device",
        "visible": false
      }
    ],
    "transactions": [
      {
        "field": "transactionId",
        "visible": true
      },
      {
        "field": "terminalDate",
        "visible": true
      },
      {
        "field": "terminalTime",
        "visible": true
      },
      {
        "field": "atmNo",
        "visible": true
      },
      {
        "field": "cardNumber",
        "visible": true
      },
      {
        "field": "bankNo",
        "visible": true
      },
      {
        "field": "transactionType",
        "visible": true
      },
      {
        "field": "amount",
        "visible": true
      },
      {
        "field": "transactionStatus",
        "visible": true
      },
      {
        "field": "approver",
        "visible": true
      },
      {
        "field": "rejectReason",
        "visible": true
      },
      {
        "field": "atmFeeAmount",
        "visible": true
      },
      {
        "field": "businessDay",
        "visible": true
      }
    ]

  },
  atmCustomization: {
    "atmTabs": [
      {
        "field": "atmStatus",
        "visible": true
      }, {
        "field": "atmAccessories",
        "visible": true
      }, {
        "field": "retainedCards",
        "visible": true
      }, {
        "field": "atmSettings",
        "visible": true
      }, {
        "field": "alerts",
        "visible": true
      }, {
        "field": "events",
        "visible": true
      }, {
        "field": "transactions",
        "visible": true
      }
    ],
    "atmSettings": [
      {
        "field": "generalSettings",
        "visible": true
      },
      {
        "field": "cassettesSettings",
        "visible": true
      },
      {
        "field": "disableSettings",
        "visible": true
      },
      {
        "field": "terminalNearestSettings",
        "visible": true
      },
      {
        "field": "treatmentDeviceSettings",
        "visible": true
      },
      {
        "field": "limitationAmountsSettings",
        "visible": true
      }],
    "atmGeneralSettings": {
      "atmNo": "123456",
      "terminalShvaId": "0000",
      "leumiTerminalId": "00000000",
      "atmName": "TEST",
      "city": "city",
      "address": "rehov 1",
      "engAddress": "eng adress",
      "zipCode": "1234567",
      "vendor": "NCR",
      "ipAddress": "10.0.0.13",
      "portNumber": 5006,
      "atmProtocol": "NDC",
      "rklProtocol": "NONE",
      "terminalGroup": "01",
      "belong": 0,
      "area": "NONE",
      "bankNo": "20",
      "branch": "123",
      "branchName": "branch name",
      "engBranchName": "eng branch name",
      "branchPhone": "031234567",
      "branchFax": "031234567",
      "localCurrencyTrigger": 5000000,
      "configId": "1111",
      "maxBills": 200
    },
    "atmCassettesSettings": {
      "cassetteType": "1",
      "currencyCode": "376",
      "denomination": 0
    },
    "disableSettings": {
      "disabledATM": true,
      "disableCashDeposit": false,
      "disableCheckDeposit": false,
      "disableReceipt": false,
      "disableVoucher": true
    },
    "emvSettings": {
      "emvNotOurs": false,
      "emvOurs": false,
      "emvTourist": false
    },
    "feeSettings": {
      "notOursFee": 0,
      "oursFee": 0,
      "touristFee": 0
    },
    "limitationAmountsSettings": {
      "notOursFee": 0,
      "claimAmount": 0,
      "localCurrencyTrigger": 5000000,
      "localCurrencyTrigger2": 1000000
    },
    "treatmentDeviceSettings": {
      "terminalLogicalId": null,
      "responsibility": "NONE",
      "commentsTreatment": "",
      "treatmentStartDate": 0
    }
  },
  dashboard: {
    "widgets": [
      {
        "field": "ConnectionStatusComponent",
        "visible": true
      }, {
        "field": "DevicesStatusComponent",
        "visible": true
      }, {
        "field": "OnlineStatusComponent",
        "visible": true
      }, {
        "field": "IssuerActionsStatusComponent",
        "visible": true
      }, {
        "field": "ActionsStatusComponent",
        "visible": true
      }
    ]
  },
  reports: {
    "hardwareReport": [
      {
        "field": "atmNo",
        "visible": true
      }, {
        "field": "date",
        "visible": true
      }, {
        "field": "time",
        "visible": true
      }, {
        "field": "device",
        "visible": true
      }, {
        "field": "eventSeverity",
        "visible": true
      }, {
        "field": "eventTextLocal",
        "visible": true
      }, {
        "field": "eventTextEn",
        "visible": true
      }
    ],
    "faultReports": [
      {
        "field": "atmNo",
        "visible": true
      }, {
        "field": "date",
        "visible": true
      }, {
        "field": "time",
        "visible": true
      }, {
        "field": "eventSeverity",
        "visible": true
      }, {
        "field": "eventTextLocal",
        "visible": true
      }, {
        "field": "eventTextEn",
        "visible": true
      }, {
        "field": "device",
        "visible": false
      }
    ],
    "cardRetainReports": [
      {
        "field": "atmNo",
        "visible": true
      },
      {
        "field": "cardNumber",
        "visible": true
      },
      {
        "field": "terminalDate",
        "visible": true
      },
      {
        "field": "terminalTime",
        "visible": true
      },
      {
        "field": "remove",
        "visible": true
      },
      {
        "field": "retainReason",
        "visible": false
      },
      {
        "field": " removeDate ",
        "visible": false
      }

    ],
    "cardActivityReport": [
      {
        "field": "terminalDate",
        "visible": true
      },
      {
        "field": "terminalTime",
        "visible": true
      },
      {
        "field": "atmNo",
        "visible": true
      },
      {
        "field": "cardNumber",
        "visible": true
      },
      {
        "field": "transactionType",
        "visible": true
      },
      {
        "field": "amount",
        "visible": true
      },
      {
        "field": "transactionStatus",
        "visible": true
      },
      {
        "field": "approver",
        "visible": true
      },
      {
        "field": "rejectReason",
        "visible": true
      },
      {
        "field": "retainReason",
        "visible": true
      },

      {
        "field": "atmFeeAmount",
        "visible": true
      },
      {
        "field": "businessDay",
        "visible": true
      }, {
        "field": "transactionId",
        "visible": false
      },
      {
        "field": "bankNo",
        "visible": false
      },
    ],
    "accountActivityReport": [
      {
        "field": "terminalDate",
        "visible": true
      },
      {
        "field": "terminalTime",
        "visible": true
      },
      {
        "field": "atmNo",
        "visible": true
      },
      {
        "field": "cardNumber",
        "visible": true
      },
      {
        "field": "transactionType",
        "visible": true
      },
      {
        "field": "amount",
        "visible": true
      },
      {
        "field": "transactionStatus",
        "visible": true
      },
      {
        "field": "approver",
        "visible": true
      },
      {
        "field": "rejectReason",
        "visible": true
      },
      {
        "field": "retainReason",
        "visible": true
      },
      {
        "field": "atmFeeAmount",
        "visible": true
      },
      {
        "field": "businessDay",
        "visible": true
      }, {
        "field": "transactionId",
        "visible": false
      },
      {
        "field": "bankNo",
        "visible": false
      },
    ],
    "transactionsReport": [
      {
        "field": "terminalDate",
        "visible": true
      },
      {
        "field": "terminalTime",
        "visible": true
      },
      {
        "field": "atmNo",
        "visible": true
      },
      {
        "field": "cardNumber",
        "visible": true
      },
      {
        "field": "transactionType",
        "visible": true
      },
      {
        "field": "amount",
        "visible": true
      },
      {
        "field": "transactionStatus",
        "visible": true
      },
      {
        "field": "approver",
        "visible": true
      },
      {
        "field": "rejectReason",
        "visible": true
      },
      {
        "field": "retainReason",
        "visible": true
      },

      {
        "field": "atmFeeAmount",
        "visible": true
      },
      {
        "field": "businessDay",
        "visible": true
      }, {
        "field": "transactionId",
        "visible": false
      },
      {
        "field": "bankNo",
        "visible": false
      },
    ]
  }

};

var customerGeneral = {
  businessDay: 1493899326040,
  customer: "BEINLEUMI",
  bankNo: "20"
};

var mainConnection = [
  {
    "connectionName": "HSM",
    "statusView": "DISABLE"
  }, {
    "connectionName": "BANK",
    "statusView": "GOOD"
  }
];

var device_status = [
  {
    "statusView": "GOOD",
    "precents": 45
  }, {
    "statusView": "FATAL",
    "precents": 27
  }, {
    "statusView": "ATTENTION",
    "precents": 27
  }, {
    "statusView": "DISABLE",
    "precents": 27
  }
];

var onlineStatus = {
  "avg": 16.0,
  "currentOnline": 4.9
};

var issuerActionStatus = [
  {
    "bank": "LEUMI",
    "noError": 18050,
    "fatal": 450
  }, {
    "bank": "BOJ",
    "noError": 16000,
    "fatal": 620
  }, {
    "bank": "YAHAV",
    "noError": 13000,
    "fatal": 870
  }
];

var actionStatus = [
  {
    "statusName": "IncorrectPINCode",
    "percents": 32
  }, {
    "statusName": "Rejection",
    "percents": 13
  }, {
    "statusName": "SuccessfulOperations",
    "percents": 45
  }, {
    "statusName": "Fault",
    "percents": 10
  }
];

var atms_inventory = {
  "totalCount": 68,
  "atms": [{
    "terminalId": "000000",
    "atmName": "defult",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1481716694963,
    "lastSettlement": -2045010040000,
    "lastMessage": 1481716694963,
    "branch": "0",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": -2045010040000,
    "lastCardSettlement": -2045010040000,
    "lastDepositSettlement": -2045010040000,
    "lastCheckSettlement": -2045010040000,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "000001",
    "atmName": "השם",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "FATAL",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "GOOD",
    "printerColor": "DISABLE",
    "receiptColor": "GOOD",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1439728482707,
    "lastSettlement": 1441094804510,
    "lastMessage": 1470209737087,
    "branch": "333",
    "belongi": -1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 1480934518070,
    "responsibility": "BRANCH",
    "terminalGroup": "20",
    "area": "SOUTH",
    "cardsRetained": 1,
    "lastGoodWdrl": 1439728482707,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "000002",
    "atmName": "בדיקה222",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": true,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1427108287153,
    "lastSettlement": 0,
    "lastMessage": 1427108287153,
    "branch": "333",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "33",
    "area": "CENTER",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "000011",
    "atmName": "כיכר ציון ים - 50",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "333",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "14",
    "area": "CENTER",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "000222",
    "atmName": "רר",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "GOOD",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1414653825777,
    "lastSettlement": 0,
    "lastMessage": 1414653825777,
    "branch": "322",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "66",
    "area": "SOUTH",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "000634",
    "atmName": "333",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 1419411391027,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "33",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "001111",
    "atmName": "מירי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "FATAL",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "GOOD",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1402557599937,
    "lastSettlement": 1477380451977,
    "lastMessage": 1484826316990,
    "branch": "123",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 0,
    "responsibility": "NONE",
    "terminalGroup": "55",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 1402557599937,
    "lastCardSettlement": 1397118954920,
    "lastDepositSettlement": 1392815928310,
    "lastCheckSettlement": 1392707235057,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "001112",
    "atmName": "חדש",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "GOOD",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "DISABLE",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 1408341402637,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "001122",
    "atmName": "ניסיון",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "655",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "001211",
    "atmName": "S121-adkan1",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1473330951180,
    "lastSettlement": -2045010040000,
    "lastMessage": 1473330951180,
    "branch": "0",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": -2045010040000,
    "lastCardSettlement": -2045010040000,
    "lastDepositSettlement": -2045010040000,
    "lastCheckSettlement": -2045010040000,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "001515",
    "atmName": "שפירים",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 0,
    "branch": "444",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "22",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "002222",
    "atmName": "פניני",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "ATTENTION",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "GOOD",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1470211616053,
    "lastSettlement": 1439712093627,
    "lastMessage": 1470211616463,
    "branch": "111",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 1470210003780,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 1,
    "lastGoodWdrl": 1470211616053,
    "lastCardSettlement": 1426494287130,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 1170000,
    "totalDispensed": 14800000,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "002255",
    "atmName": "מדפסת צרה",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 1401969820290,
    "branch": "655",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "55",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "002323",
    "atmName": "SSSSS",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "222",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "21",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "002389",
    "atmName": "חני",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1414654241870,
    "lastSettlement": 0,
    "lastMessage": 1414654241870,
    "branch": "121",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "55",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "002499",
    "atmName": "ניסוי2",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "123",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "003232",
    "atmName": "כללי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 0,
    "branch": "654",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "02",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "003595",
    "atmName": "testKiosk",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1482844213700,
    "lastSettlement": -2045010040000,
    "lastMessage": 1482844213700,
    "branch": "0",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": -2045010040000,
    "lastCardSettlement": -2045010040000,
    "lastDepositSettlement": -2045010040000,
    "lastCheckSettlement": -2045010040000,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "004321",
    "atmName": "ככ",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1414586836027,
    "lastSettlement": 0,
    "lastMessage": 1414586836027,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "1",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "005010",
    "atmName": "topup1",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "005550",
    "atmName": "5",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415016704460,
    "lastSettlement": 0,
    "lastMessage": 1415016704460,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "005555",
    "atmName": "חני",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "ATTENTION",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "GOOD",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1470211583597,
    "lastSettlement": 1417510757637,
    "lastMessage": 1470211583970,
    "branch": "333",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 1470209992080,
    "responsibility": "NONE",
    "terminalGroup": "22",
    "area": "NONE",
    "cardsRetained": 1,
    "lastGoodWdrl": 1470211583597,
    "lastCardSettlement": 1416299682890,
    "lastDepositSettlement": 1435744039613,
    "lastCheckSettlement": 1427612996323,
    "totalRemaining": 7580000,
    "totalDispensed": 4395000,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "005559",
    "atmName": "testKiosk",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1473332933440,
    "lastSettlement": -2045010040000,
    "lastMessage": 1473332933440,
    "branch": "0",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": -2045010040000,
    "lastCardSettlement": -2045010040000,
    "lastDepositSettlement": -2045010040000,
    "lastCheckSettlement": -2045010040000,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "005595",
    "atmName": "testKiosk",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1482829034340,
    "lastSettlement": -2045010040000,
    "lastMessage": 1482829034340,
    "branch": "0",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": -2045010040000,
    "lastCardSettlement": -2045010040000,
    "lastDepositSettlement": -2045010040000,
    "lastCheckSettlement": -2045010040000,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "005656",
    "atmName": "ניסוי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "ATTENTION",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "GOOD",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1439721613520,
    "lastSettlement": 1433673395747,
    "lastMessage": 1441627174600,
    "branch": "655",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 1441627174617,
    "responsibility": "NONE",
    "terminalGroup": "55",
    "area": "CENTER",
    "cardsRetained": 2,
    "lastGoodWdrl": 1439721613520,
    "lastCardSettlement": 1433673396043,
    "lastDepositSettlement": 1430200543417,
    "lastCheckSettlement": 1439706299310,
    "totalRemaining": 13170000,
    "totalDispensed": 5090000,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "005658",
    "atmName": "נסיון",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "GOOD",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "GOOD",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 1391505559793,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 19259000,
    "totalDispensed": 36000,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "005854",
    "atmName": "טירה",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 0,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "006464",
    "atmName": "פ\"ת",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "545",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "006523",
    "atmName": "חנני",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 0,
    "branch": "655",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "006566",
    "atmName": "חני נוסף",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 0,
    "branch": "655",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "006587",
    "atmName": "חני",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1414654082137,
    "lastSettlement": 0,
    "lastMessage": 1414654082137,
    "branch": "112",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "55",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "006595",
    "atmName": "testKiosk",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1482829936213,
    "lastSettlement": -2045010040000,
    "lastMessage": 1482829936213,
    "branch": "0",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": -2045010040000,
    "lastCardSettlement": -2045010040000,
    "lastDepositSettlement": -2045010040000,
    "lastCheckSettlement": -2045010040000,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "006665",
    "atmName": "מירי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "FATAL",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "GOOD",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1382437680143,
    "lastSettlement": 1382437137217,
    "lastMessage": 1408344644137,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 1382437680143,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1382437137247,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 2804000,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "006666",
    "atmName": "נועה",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "ATTENTION",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "GOOD",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1470211575600,
    "lastSettlement": 1414921872677,
    "lastMessage": 1470731970413,
    "branch": "111",
    "belongi": 1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 1470730066393,
    "responsibility": "NONE",
    "terminalGroup": "22",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 1470211575600,
    "lastCardSettlement": 1470730013990,
    "lastDepositSettlement": 1470208954343,
    "lastCheckSettlement": 1424773273360,
    "totalRemaining": 11975000,
    "totalDispensed": 110000,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "006868",
    "atmName": "test1",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 0,
    "branch": "444",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "12",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "007433",
    "atmName": "עעע",
    "terminalStatusColor": "DISABLE",
    "terminalStatus": "DISABLED",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1414585971647,
    "lastSettlement": 0,
    "lastMessage": 1414585971647,
    "branch": "111",
    "belongi": 2,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "008135",
    "atmName": "testKiosk",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1480247519327,
    "lastSettlement": -2045010040000,
    "lastMessage": 1480247519327,
    "branch": "0",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": -2045010040000,
    "lastCardSettlement": -2045010040000,
    "lastDepositSettlement": -2045010040000,
    "lastCheckSettlement": -2045010040000,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "008745",
    "atmName": "בני ברק",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 1392195002993,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "008765",
    "atmName": "בדיקת מושבת",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 0,
    "branch": "888",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "008965",
    "atmName": "נעה",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 1380711947617,
    "lastMessage": 0,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 1380711947617,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "009664",
    "atmName": "ghkjh",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "777",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "009874",
    "atmName": "ss",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "009876",
    "atmName": "בדיקה",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 0,
    "lastSettlement": 0,
    "lastMessage": 0,
    "branch": "444",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "009994",
    "atmName": "שרי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1414581783397,
    "lastSettlement": 0,
    "lastMessage": 1414581783397,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "1",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "009999",
    "atmName": "איבי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "ATTENTION",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "GOOD",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1480934061543,
    "lastSettlement": 1459066524210,
    "lastMessage": 1495962521737,
    "branch": "333",
    "belongi": -1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 0,
    "responsibility": "NONE",
    "terminalGroup": "02",
    "area": "SOUTH",
    "cardsRetained": 1,
    "lastGoodWdrl": 1480934061543,
    "lastCardSettlement": 1467024542397,
    "lastDepositSettlement": 1409742867217,
    "lastCheckSettlement": 1409742846560,
    "totalRemaining": 14410000,
    "totalDispensed": 1560000,
    "checkTotalBin1": 4,
    "checkTotalBin2": 0
  }, {
    "terminalId": "121314",
    "atmName": "ניסוי רביעי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1417692924217,
    "lastSettlement": 0,
    "lastMessage": 1417692924217,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "33",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "122222",
    "atmName": "1",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1417077292607,
    "lastSettlement": 0,
    "lastMessage": 1417077292607,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "123456",
    "atmName": "אאאאאא",
    "terminalStatusColor": "DISABLE",
    "terminalStatus": "DISABLED",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1483601217707,
    "lastSettlement": 0,
    "lastMessage": 1483601217707,
    "branch": "123",
    "belongi": -1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 0,
    "responsibility": "NONE",
    "terminalGroup": "01",
    "area": "NORTH",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "123987",
    "atmName": "עיחיח",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415017953907,
    "lastSettlement": 0,
    "lastMessage": 1415017953907,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "151415",
    "atmName": "טבלאות",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1416302806803,
    "lastSettlement": 0,
    "lastMessage": 1416302806803,
    "branch": "555",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "55",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "151417",
    "atmName": "2.4.2",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1418038390800,
    "lastSettlement": 0,
    "lastMessage": 1418038390800,
    "branch": "999",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "88",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "234568",
    "atmName": "hghg",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415085294027,
    "lastSettlement": 0,
    "lastMessage": 1415085294027,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "288034",
    "atmName": "new test",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "GOOD",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "GOOD",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1456399431107,
    "lastSettlement": -2045010040000,
    "lastMessage": 1472125719903,
    "branch": "0",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": 0,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 1,
    "lastGoodWdrl": -2045010040000,
    "lastCardSettlement": -2045010040000,
    "lastDepositSettlement": -2045010040000,
    "lastCheckSettlement": -2045010040000,
    "totalRemaining": 11283000,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "301099",
    "atmName": "ת.ז",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1435742385167,
    "lastSettlement": 0,
    "lastMessage": 1435743403723,
    "branch": "666",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": 1435742385167,
    "responsibility": "NONE",
    "terminalGroup": "66",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "333333",
    "atmName": "ניסיון",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415016463803,
    "lastSettlement": 0,
    "lastMessage": 1415016463803,
    "branch": "565",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "545",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "525252",
    "atmName": "hkjhkjh",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1416918355663,
    "lastSettlement": 0,
    "lastMessage": 1416918355663,
    "branch": "333",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "555555",
    "atmName": "שורי בדיקה",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1414928976137,
    "lastSettlement": 0,
    "lastMessage": 1414928976137,
    "branch": "455",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "33",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "555777",
    "atmName": "מירי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415018448323,
    "lastSettlement": 0,
    "lastMessage": 1415018448323,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "579911",
    "atmName": "בובליק8",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1426154389977,
    "lastSettlement": 0,
    "lastMessage": 1426154389977,
    "branch": "888",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "85",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "654321",
    "atmName": "בדיקות2.4",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": true,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1417336611747,
    "lastSettlement": 0,
    "lastMessage": 1417336611747,
    "branch": "656",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "54",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "666666",
    "atmName": "מיראי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415017925547,
    "lastSettlement": 0,
    "lastMessage": 1415017925547,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "777777",
    "atmName": "עיחיח",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415017924577,
    "lastSettlement": 0,
    "lastMessage": 1419846000333,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "843295",
    "atmName": "חח",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1480940955070,
    "lastSettlement": 0,
    "lastMessage": 1480940955070,
    "branch": "111",
    "belongi": -1,
    "belong": "MIZRHAI",
    "treatmentStartDate": 0,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "SOUTH",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": null,
    "totalDispensed": null,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "888883",
    "atmName": "כעכע",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1416210634437,
    "lastSettlement": 0,
    "lastMessage": 1416210634437,
    "branch": "777",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "77",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "957453",
    "atmName": "מירי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415019641040,
    "lastSettlement": 0,
    "lastMessage": 1415019641040,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "965284",
    "atmName": "jkljhnk",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1416917884717,
    "lastSettlement": 0,
    "lastMessage": 1416917884717,
    "branch": "233",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "976542",
    "atmName": "מירי",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415018267313,
    "lastSettlement": 0,
    "lastMessage": 1415018267313,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }, {
    "terminalId": "999999",
    "atmName": "מעמע",
    "terminalStatusColor": "FATAL",
    "terminalStatus": "OFF_LINE",
    "closedStatus": false,
    "closedOperator": false,
    "closedGroup": false,
    "closedAll": false,
    "closedReason": "UNKNOWN",
    "dispenserColor": "DISABLE",
    "cashDepositColor": "DISABLE",
    "checkDepositColor": "DISABLE",
    "printerColor": "DISABLE",
    "receiptColor": "DISABLE",
    "cardReaderColor": "DISABLE",
    "eppColor": "DISABLE",
    "lastGoodTransaction": 1415017333843,
    "lastSettlement": 0,
    "lastMessage": 1415017333843,
    "branch": "111",
    "belongi": 0,
    "belong": "MIZRHAI",
    "treatmentStartDate": -2045010040000,
    "responsibility": "NONE",
    "terminalGroup": "11",
    "area": "NONE",
    "cardsRetained": 0,
    "lastGoodWdrl": 0,
    "lastCardSettlement": 0,
    "lastDepositSettlement": 0,
    "lastCheckSettlement": 0,
    "totalRemaining": 0,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  }]
};

var atms_events = {
  "totalCount": 100,
  "allEvents": [{
    "id": 1,
    "atmNo": "000000",
    "atmName": "atmName",
    "date": 1494317961838,
    "time": 1494317961838,
    "eventSeverity": "WARN",
    "eventCode": "AC001",
    "eventTextEn": "AC001 Late response(approved) received from bank for transaction 1",
    "eventTextLocal": "תשובה מאוחרת",
    "device": "",
    "eventDestinations": ["SEC", "IT", "CIT"]
  }]
};

var atms_transactions = {
  "totalCount": 100,
  "allTransactions": [{
    "transactionId": 1952,
    "terminalDate": 1495541554321,
    "terminalTime": 1495541554321,
    "atmNo": "123456",
    "cardNumber": "2009",
    "bankNo": "20",
    "transactionType": "WITHDRAWAL",
    "amount": 100,
    "transactionStatus": "QUESTIONABLE",
    "approver": "OUR_BANK",
    "rejectReason": "NONE",
    "atmFeeAmount": 0,
    "businessDay": 1494140054473

  },
    {
      "transactionId": 1952,
      "terminalDate": 1495541554321,
      "terminalTime": 1495541554321,
      "atmNo": "123456",
      "cardNumber": "2009",
      "bankNo": "20",
      "transactionType": "WITHDRAWAL",
      "amount": 100,
      "transactionStatus": "QUESTIONABLE",
      "approver": "OUR_BANK",
      "rejectReason": "NONE",
      "atmFeeAmount": 0,
      "businessDay": 1494140054473

    },
    {
      "transactionId": 1952,
      "terminalDate": 1495541554321,
      "terminalTime": 1495541554321,
      "atmNo": "123456",
      "cardNumber": "2009",
      "bankNo": "20",
      "transactionType": "WITHDRAWAL",
      "amount": 100,
      "transactionStatus": "QUESTIONABLE",
      "approver": "OUR_BANK",
      "rejectReason": "NONE",
      "atmFeeAmount": 0,
      "businessDay": 1494140054473

    },
    {
      "transactionId": 1952,
      "terminalDate": 1495541554321,
      "terminalTime": 1495541554321,
      "atmNo": "123456",
      "cardNumber": "2009",
      "bankNo": "20",
      "transactionType": "WITHDRAWAL",
      "amount": 100,
      "transactionStatus": "QUESTIONABLE",
      "approver": "OUR_BANK",
      "rejectReason": "NONE",
      "atmFeeAmount": 0,
      "businessDay": 1494140054473

    },
    {
      "transactionId": 1952,
      "terminalDate": 1495541554321,
      "terminalTime": 1495541554321,
      "atmNo": "123456",
      "cardNumber": "2009",
      "bankNo": "20",
      "transactionType": "WITHDRAWAL",
      "amount": 100,
      "transactionStatus": "QUESTIONABLE",
      "approver": "OUR_BANK",
      "rejectReason": "NONE",
      "atmFeeAmount": 0,
      "businessDay": 1494140054473

    },
    {
      "transactionId": 1952,
      "terminalDate": 1495541554321,
      "terminalTime": 1495541554321,
      "atmNo": "123456",
      "cardNumber": "2009",
      "bankNo": "20",
      "transactionType": "WITHDRAWAL",
      "amount": 100,
      "transactionStatus": "QUESTIONABLE",
      "approver": "OUR_BANK",
      "rejectReason": "NONE",
      "atmFeeAmount": 0,
      "businessDay": 1494140054473

    },
    {
      "transactionId": 1952,
      "terminalDate": 1495541554321,
      "terminalTime": 1495541554321,
      "atmNo": "123456",
      "cardNumber": "2009",
      "bankNo": "20",
      "transactionType": "WITHDRAWAL",
      "amount": 100,
      "transactionStatus": "QUESTIONABLE",
      "approver": "OUR_BANK",
      "rejectReason": "NONE",
      "atmFeeAmount": 0,
      "businessDay": 1494140054473

    }]
};

var atm_status = {
  "atmStatusGeneral": {
    "terminalStatus": "OFF_LINE",
    "targetTerminalStatus": "OFF_LINE",
    "communicationlStatus": "OFF_LINE",
    "ipAddress": "127.0.0.1",
    "atmModel": "0000",
    "softwareVersion": "",
    "configId": "0000",
    "loadStage": "NONE",
    "loadVariant": "",
    "loadNumber": "00"
  },
  "atmStatusLastAction": {
    "terminalDateTime": 1494317961838,
    "transactionStatus": "APPROVED",
    "rejectReason": "NONE",
    "retainReason": "NONE",
    "cardholderGroup": "UNKNOWN",
    "panEntryMode": "MAGNETIC",
    "cardNumber": 5214,
    "tranType": "NONE",
    "amount": 0,
    "billsInfo": "200/2~100/5"
  },
  "atmSummaryStatus": [{
    "device": "CARD_READER",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  }, {
    "device": "CHECK_ENDORSE_PRINTER",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NEARLY_FULL",
    "counter": 0
  }],
  "atmKeys": {
    "keys": [
      {
        "keyType": "MASTER",
        "keyStatus": "CANCELLED",
        "kcv": "000000",
      },
      {
        "keyType": "ENC",
        "keyStatus": "CANCELLED",
        "kcv": "000000",
      },
      {
        "keyType": "AUTH",
        "keyStatus": "CANCELLED",
        "kcv": "000000"
      }
    ],
    "eppUid": 52364862,
    "lastWorkingKeyChange": 1495613739356
  }
};

var atm_accessories = {
  "accessoriesDispenserInfo": {
    "cassettesList": [
      {
        "cassetteType": "1",
        "statusColor": "GOOD",
        "supply": "NO_INFO",
        "currencyCode": "NIS",
        "denomination": 5000,
        "loaded": 1000,
        "dispensed": 0,
        "rejected": 0,
        "remaining": 1000
      },
      {
        "statusColor": "GOOD",
        "supply": "NO_INFO",
        "currencyCode": "NIS",
        "denomination": 10000,
        "loaded": 1000,
        "dispensed": 100,
        "rejected": 0,
        "remaining": 900
      },
      {
        "statusColor": "GOOD",
        "supply": "NO_INFO",
        "currencyCode": "NIS",
        "denomination": 20000,
        "loaded": 0,
        "dispensed": 0,
        "rejected": 0,
        "remaining": 0
      },
      {
        "statusColor": "DISABLE",
        "supply": "NO_INFO",
        "currencyCode": "NIS",
        "denomination": 0,
        "loaded": 0,
        "dispensed": 0,
        "rejected": 0,
        "remaining": 0
      }],
    "sumDispensed": 12000,
    "sumRemaing": 10000,
    "lastGoodWithrawal": 1495612612579,
    "localCurrencyTrigger": 5000000,
    "localCurrencyTrigger2": 2000000
  },
  "lastSettleDispenseList": {
    "lastSettleDispenseList": [
      {
        "denomination": 10000,
        "currency": "NIS",
        "count": 18,
        "sumMeteg": 180000,
        "sumAtm": 180000,
        "difference": 0
      },
      {
        "denomination": 20000,
        "currency": "NIS",
        "count": 4,
        "sumMeteg": 80000,
        "sumAtm": 60000,
        "difference": 20000
      }
    ],
    "lastSettelement": 1495612612579,
    "transactionId": 453
  },
  "printersInfo": {
    "deviceList": [
      {
        "device": "STATEMENT_PRINTER",
        "statusColor": "DISABLE",
        "fitness": "NO_ERROR",
        "supply": "NO_INFO",
        "counter": 0
      },
      {
        "device": "STATEMENT_PRINTER_RIBBON",
        "statusColor": "DISABLE",
        "fitness": "NO_ERROR",
        "supply": "NO_INFO",
        "counter": 0
      },
      {
        "device": "STATEMENT_PRINTER_PRINTHEAD",
        "statusColor": "DISABLE",
        "fitness": "NO_ERROR",
        "supply": "NO_INFO",
        "counter": 0
      },
      {
        "device": "STATEMENT_PRINTER_KNIFE",
        "statusColor": "DISABLE",
        "fitness": "NO_ERROR",
        "supply": "NO_INFO",
        "counter": 0
      },
      {
        "device": "STATEMENT_PRINTER_CAPTURE_BIN",
        "statusColor": "DISABLE",
        "fitness": "NO_ERROR",
        "supply": "NO_INFO",
        "counter": 0
      }
    ]
  },
  "checkInfo": {
    "deviceList": [{
      "device": "CHECK_PROCESSOR",
      "statusColor": "DISABLE",
      "fitness": "NO_ERROR",
      "supply": "NO_INFO",
      "counter": 0
    }, {
      "device": "CHECK_PROCESSOR_BIN_1",
      "statusColor": "DISABLE",
      "fitness": "NO_ERROR",
      "supply": "NO_INFO",
      "counter": 0
    }, {
      "device": "CHECK_PROCESSOR_BIN_2",
      "statusColor": "DISABLE",
      "fitness": "NO_ERROR",
      "supply": "NO_INFO",
      "counter": 0
    }, {
      "device": "CHECK_ENDORSE_PRINTER",
      "statusColor": "DISABLE",
      "fitness": "NO_ERROR",
      "supply": "NO_INFO",
      "counter": 0
    }],
    "lastCheckDeposit": 1495612612579,
    "lastSettelementCheckDeposit": 1495612612579
  },
  "otherAccessoriesInfo": {
    "deviceList": [{
      "device": "CARD_READER",
      "statusColor": "DISABLE",
      "fitness": "NO_ERROR",
      "supply": "NO_INFO",
      "counter": 0
    }, {
      "device": "ENCRYPTOR",
      "statusColor": "DISABLE",
      "fitness": "NO_ERROR",
      "supply": "NO_INFO",
      "counter": 0
    }, {
      "device": "JOURNAL_PRINTER",
      "statusColor": "DISABLE",
      "fitness": "NO_ERROR",
      "supply": "NO_INFO",
      "counter": 0
    }],
    "lastCardSettelement": 1495612612579
  }

};

var atm_retainedCards = [
  {
    "cardNumber": "4002",
    "terminalDate": 1495612612579,
    "terminalTime": 1495612612579,
    "retainReason": "WRONG_PIN",
    "removeDate": 1495612612579
  },
  {
    "cardNumber": "1953",
    "terminalDate": 1495612612579,
    "terminalTime": 1495612612579,
    "retainReason": "CARD_BLOCKED",
    "removeDate": 1495612612579
  }
];

var transaction = [
  {
    "title": "TransactionIdentifer",
    "data": [
      {
        "key": "transactionId",
        "value": "0",
        "type": ""
      }, {
        "key": "transactionType",
        "value": "NONE",
        "type": ""
      }, {
        "key": "terminalId",
        "value": "000000",
        "type": ""
      }, {
        "key": "terminalShvaId",
        "value": "0000",
        "type": ""
      }, {
        "key": "atmSeq",
        "value": "0",
        "type": ""
      }, {
        "key": "terminalDateTime",
        "value": "Wed Jun 07 16:02:11 IDT 2017",
        "type": ""
      }, {
        "key": "bussinessDay",
        "value": "Thu Jan 01 02:00:00 IST 1970",
        "type": ""
      }]
  },
  {
    "title": "TransactionGeneral",
    "data": [
      {
        "key": "languageCode",
        "value": "HEBREW",
        "type": "Language"
      }, {
        "key": "withReceipt",
        "value": "false",
        "type": ""
      }, {
        "key": "pinVerified",
        "value": "false",
        "type": ""
      }, {
        "key": "authorizationCode",
        "value": "000000",
        "type": ""
      }]
  },
  {
    "title": "TransactionAmount",
    "data": [
      {
        "key": "amount",
        "value": "0",
        "type": ""
      }, {
        "key": "currencyCode",
        "value": "NIS",
        "type": ""
      }]
  },
  {
    "title": "TransactionDetails",
    "data": [
      {
        "key": "balanceDate",
        "value": "0000",
        "type": ""
      }, {
        "key": "feeAmount",
        "value": "0",
        "type": ""
      }, {
        "key": "atmFeeAmount",
        "value": "0",
        "type": ""
      }]
  },
  {
    "title": "TransactionStatus",
    "data": [
      {
        "key": "transactionStatus",
        "value": "NOT_APPROVED",
        "type": "TransactionStatus"
      }, {
        "key": "approver",
        "value": "NONE",
        "type": "Approver"
      }, {
        "key": "rejectReason",
        "value": "NONE",
        "type": "RejectReason"
      }, {
        "key": "switchDecision",
        "value": "NONE",
        "type": "SwitchDecision"
      }, {
        "key": "retainReason",
        "value": "NONE",
        "type": "RetainReason"
      }]
  },
  {
    "title": "CardDetails",
    "data": [
      {
        "key": "cardNumber",
        "value": "",
        "type": ""
      }, {
        "key": "cardholderGroup",
        "value": "UNKNOWN",
        "type": "CardholderGroup"
      }, {
        "key": "cardStatusCode",
        "value": "UNKNOWN",
        "type": "CardStatusCode"
      }, {
        "key": "accountBank",
        "value": "",
        "type": ""
      }, {
        "key": "accountBranch",
        "value": "",
        "type": ""
      }, {
        "key": "accountNo",
        "value": "",
        "type": ""
      }, {
        "key": "accountStatusCode",
        "value": "false",
        "type": ""
      }]
  }];

var atm_settings = {
  "generalSettings": {
    "atmNo": "000011",
    "atmName": "Jerusalem",
    "address": "Menachem Begin 27",
    "zipCode": "5416682",
    "vendor": "NCR",
    "ipAddress": "10.0.0.13",
    "portNumber": 5006,
    "atmProtocol": "NDC",
    "rklProtocol": "NCR_ENHANCED",
    "terminalGroup": "01",
    "belongi": 0,
    "belong": "BRANCH",
    "area": "NORTH",
    "bankNo": "20",
    "branch": "123",
    "configId": "1111",
    "maxBills": 40
  },
  "cassettesSettings": [
    {
      "cassetteType": "1",
      "currencyCode": "NIS",
      "denomination": 200
    }, {
      "cassetteType": "2",
      "currencyCode": "NIS",
      "denomination": 5000
    }, {
      "cassetteType": "3",
      "currencyCode": "NIS",
      "denomination": 10000
    }, {
      "cassetteType": "4",
      "currencyCode": "NIS",
      "denomination": 2000
    }],
  "disableSettings": {
    "disabledATM": false,
    "disableCheckDeposit": true,
    "disableReceipt": false
  },
  "emvSettings": {
    "emvNotOurs": false,
    "emvOurs": false,
    "emvTourist": false
  },
  "treatmentDeviceSettings": {
    "treatmentStartDate": 1496782800000,
    "responsibility": "VENDOR"
  }
};

var hsm_status = {
  "hsmStatus": "GOOD",
  "hsms": [{
    "main": true,
    "hsmSerialId": "3567/4444",
    "hsmAddress": "127.0.0.1",
    "hsmPort": 1024,
    "hsmStatusColor": "GOOD",
    "numberOfSessions": 1
  }],
  "sessions": [{
    "hsmSerialId": "3567/4444",
    "sessionNumber": 1,
    "sessionType": "REGULAR",
    "sessionStatus": "NONE",
    "sessionRequest": "NONE"
  }
  ]
};

var hsm_statistics = {
  "statistics1": [{
    "sessionNumber": 1,
    "pinGood": 5,
    "pinBad": 0,
    "macGood": 6,
    "macBad": 2,
    "otherGood": 1,
    "otherBad": 1,
    "fail": 0
  }
  ],
  "statistics2": [{
    "sessionNumber": 1,
    "pinGood": 5,
    "pinBad": 0,
    "macGood": 6,
    "macBad": 2,
    "otherGood": 1,
    "otherBad": 1,
    "fail": 0
  }
  ]
};

var epps = {
  "totalCount": 100,
  "allEpp": [{
    "eppUid": 0005674,
    "rklStatus": 'IN_PROCESS',
    "eppDisable": true,
    "atmNo": '001234',
    "atmName": 'שם מכשיר'
  }]
}

