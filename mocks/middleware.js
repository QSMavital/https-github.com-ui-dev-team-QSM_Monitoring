module.exports = function (req, res, next) {
  //
  var delay = 1000;
  setTimeout(function () {

    if (req.url.indexOf('/general/settingsUser') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        settingsUser
      ));
    }
    else if (req.url.indexOf('/general') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        customerGeneral
      ));
    }
    else if (req.url.indexOf('/main/connection') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        mainConnection
      ));
    }
    else if (req.url.indexOf('/main/deviceStatus') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        device_status
      ));
    }
    else if (req.url.indexOf('/main/onlineStatus') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        onlineStatus
      ));
    }
    else if (req.url.indexOf('/main/issuerActionStatus') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        issuerActionStatus
      ));
    }
    else if (req.url.indexOf('/main/actionStatus') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(
        actionStatus
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
    "atmsSupply": [
      {
        "field" : "terminalId",
        "visible" : true
      }, {
        "field" : "atmName",
        "visible" : true
      }, {
        "field" : "terminalStatus",
        "visible" : true
      }, {
        "field" : "closedReason",
        "visible" : true
      }, {
        "field" : "dispenserColor",
        "visible" : false
      }, {
        "field" : "cashDepositColor",
        "visible" : false
      }, {
        "field" : "checkDepositColor",
        "visible" : false
      }, {
        "field" : "printerColor",
        "visible" : false
      }, {
        "field" : "receiptColor",
        "visible" : false
      }, {
        "field" : "cardReaderColor",
        "visible" : false
      }, {
        "field" : "eppColor",
        "visible" : false
      }, {
        "field" : "lastMessage",
        "visible" : false
      }, {
        "field" : "treatmentStartDate",
        "visible" : false
      }, {
        "field" : "responsibility",
        "visible" : false
      }, {
        "field" : "terminalGroup",
        "visible" : false
      }, {
        "field" : "area",
        "visible" : false
      }, {
        "field" : "terminalGroup",
        "visible" : false
      }, {
        "field" : "lastDepositSettlement",
        "visible" : false
      }, {
        "field" : "lastCheckSettlement",
        "visible" : false
      }, {
        "field" : "totalDispensed",
        "visible" : false
      }, {
        "field" : "checkTotalBin1",
        "visible" : false
      }, {
        "field" : "checkTotalBin2",
        "visible" : false
      }, {
        "field" : "lastGoodWdrl",
        "visible" : true
      }, {
        "field" : "totalRemaining",
        "visible" : true
      }, {
        "field" : "cardsRetained",
        "visible" : true
      }, {
        "field" : "lastCardSettlement",
        "visible" : true
      }, {
        "field" : "branch",
        "visible" : true
      }, {
        "field" : "lastGoodTransaction",
        "visible" : true
      }, {
        "field": "lastSettlement",
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
        "field": "atmGeneralSettings",
        "visible": true
      }, {
        "field": "atmCassetesSettings",
        "visible": true
      }, {
        "field": "disableSettings",
        "visible": true
      }, {
        "field": "emvSettings",
        "visible": true
      }, {
        "field": "feeSerttings",
        "visible": true
      }, {
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
  customer: "BEINLEUMI"
}
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
    "precents": 32
  }, {
    "statusName": "Rejection",
    "precents": 13
  }, {
    "statusName": "SuccessfulOperations",
    "precents": 45
  }, {
    "statusName": "Fault",
    "precents": 10
  }
];
