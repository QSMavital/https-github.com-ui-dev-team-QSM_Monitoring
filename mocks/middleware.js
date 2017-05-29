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
    else if (req.url.indexOf('/events/get') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        atms_events
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
    "atmsFilters":{
      "status":[
        "DISABLE",
        "GOOD",
        "ATTENTION",
        "FATAL",
        "OPERATOR"
      ],
      "group":[0],
      "area":[
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
    "transactions": [],

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
        "field": "atmGeneralSettings",
        "visible": true
      },
      {
        "field": "atmCassetesSettings",
        "visible": true
      },
      {
        "field": "disableSettings",
        "visible": true
      },
      {
        "field": "emvSettings",
        "visible": true
      },
      {
        "field": "feeSerttings",
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
    "atmCassetesSettings": {
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
    "feeSerttings": {
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
  }
};

var customerGeneral = {
  businessDay: 1493899326040,
  customer: "BEINLEUMI",
  bankNo : "20"
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
  "totalCount": 100,
  "atms": [
    {
    "terminalId": "288032",
    "atmName": "1",
    "terminalStatus": "OFF_LINE",
    "closedReason": "UNKNOWN",
    "dispenserColor": "GOOD",
    "cashDepositColor": "GOOD",
    "checkDepositColor": "DISABLE",
    "printerColor": "GOOD",
    "receiptColor": "DISABLE",
    "cardReaderColor": "GOOD",
    "eppColor": "GOOD",
    "lastGoodTransaction": 1449342890265,
    "lastSettlement": 1472027446100,
    "lastMessage": 1478269947371,
    "branch": "288",
    "belong": "YAHAV",
    "treatmentStartDate": 0,
    "responsibility": "NONE",
    "terminalGroup": "00",
    "area": "NORTH",
    "cardsRetained": 0,
    "lastGoodWdrl": 1449342890265,
    "lastCardSettlement": 1476307886568,
    "lastDepositSettlement": 946677600000,
    "lastCheckSettlement": 946677600000,
    "totalRemaining": 16965000,
    "totalDispensed": 0,
    "checkTotalBin1": 0,
    "checkTotalBin2": 0
  },    {
      "terminalId": "288032",
      "atmName": "test",
      "terminalStatus": "OFF_LINE",
      "closedReason": "UNKNOWN",
      "dispenserColor": "GOOD",
      "cashDepositColor": "GOOD",
      "checkDepositColor": "DISABLE",
      "printerColor": "GOOD",
      "receiptColor": "DISABLE",
      "cardReaderColor": "GOOD",
      "eppColor": "GOOD",
      "lastGoodTransaction": 1449342890265,
      "lastSettlement": 1472027446100,
      "lastMessage": 1478269947371,
      "branch": "288",
      "belong": "YAHAV",
      "treatmentStartDate": 0,
      "responsibility": "NONE",
      "terminalGroup": "00",
      "area": "NORTH",
      "cardsRetained": 0,
      "lastGoodWdrl": 1449342890265,
      "lastCardSettlement": 1476307886568,
      "lastDepositSettlement": 946677600000,
      "lastCheckSettlement": 946677600000,
      "totalRemaining": 16965000,
      "totalDispensed": 0,
      "checkTotalBin1": 0,
      "checkTotalBin2": 0
    },    {
      "terminalId": "288032",
      "atmName": "test",
      "terminalStatus": "OFF_LINE",
      "closedReason": "UNKNOWN",
      "dispenserColor": "GOOD",
      "cashDepositColor": "GOOD",
      "checkDepositColor": "DISABLE",
      "printerColor": "GOOD",
      "receiptColor": "DISABLE",
      "cardReaderColor": "GOOD",
      "eppColor": "GOOD",
      "lastGoodTransaction": 1449342890265,
      "lastSettlement": 1472027446100,
      "lastMessage": 1478269947371,
      "branch": "288",
      "belong": "YAHAV",
      "treatmentStartDate": 0,
      "responsibility": "NONE",
      "terminalGroup": "00",
      "area": "NORTH",
      "cardsRetained": 0,
      "lastGoodWdrl": 1449342890265,
      "lastCardSettlement": 1476307886568,
      "lastDepositSettlement": 946677600000,
      "lastCheckSettlement": 946677600000,
      "totalRemaining": 16965000,
      "totalDispensed": 0,
      "checkTotalBin1": 0,
      "checkTotalBin2": 0
    },    {
      "terminalId": "288032",
      "atmName": "test",
      "terminalStatus": "OFF_LINE",
      "closedReason": "UNKNOWN",
      "dispenserColor": "GOOD",
      "cashDepositColor": "GOOD",
      "checkDepositColor": "DISABLE",
      "printerColor": "GOOD",
      "receiptColor": "DISABLE",
      "cardReaderColor": "GOOD",
      "eppColor": "GOOD",
      "lastGoodTransaction": 1449342890265,
      "lastSettlement": 1472027446100,
      "lastMessage": 1478269947371,
      "branch": "288",
      "belong": "YAHAV",
      "treatmentStartDate": 0,
      "responsibility": "NONE",
      "terminalGroup": "00",
      "area": "NORTH",
      "cardsRetained": 0,
      "lastGoodWdrl": 1449342890265,
      "lastCardSettlement": 1476307886568,
      "lastDepositSettlement": 946677600000,
      "lastCheckSettlement": 946677600000,
      "totalRemaining": 16965000,
      "totalDispensed": 0,
      "checkTotalBin1": 0,
      "checkTotalBin2": 0
    }
  ]
};

var atms_events = [{
  "id": 1,
  "atmNo": "000000",
  "atmName": "atmName",
  "date": 1494317961838,
  "time": 1494317961838,
  "eventSeverity": "FATAL",
  "eventCode": "AC001",
  "eventTextEn": "AC001 Late response(approved) received from bank for transaction 1",
  "eventTextLocal": "תשובה מאוחרת",
  "device": "",
  "eventDestinations": ["SEC", "IT", "CIT"]
}];
