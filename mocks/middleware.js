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
    "fieldsCustomization": {
      "ATMS_TABS": [
        {
          "field": "INVENTORY_OF_ATMS",
          "visible": true
        }, {
          "field": "ALL_ALERTS",
          "visible": true
        }, {
          "field": "ALL_EVENTS",
          "visible": true
        }, {
          "field": "ALL_MOVEMENTS",
          "visible": true
        }, {
          "field": "MOVEMENT",
          "visible": true
        }
      ],
      "INVENTORY_OF_ATMS": [
        {
        "field": "ID",
        "visible": true
      }, {
        "field": "NAME",
        "visible": true
      }, {
        "field": "STATUS",
        "visible": true
      }, {
        "field": "REASON",
        "visible": true
      }, {
        "field": "LAST_WITHDRAWAL",
        "visible": true
      }, {
        "field": "REMAINING_CASH",
        "visible": true
      }, {
        "field": "RETAINED_CARDS",
        "visible": true
      }, {
        "field": "CARD_SETTLEMENT",
        "visible": true
      }, {
        "field": "BRANCH",
        "visible": true
      }, {
        "field": "LAST_ACTIVITY",
        "visible": true
      }, {
        "field": "LAST_SETTLEMENT",
        "visible": true
      }, {
        "field": "PRINTER_COLOR",
        "visible": false
      }
      ],
      "ALL_ALERTS": [],
      "ALL_EVENTS": [],
      "ALL_MOVEMENTS": [],
      "MOVEMENT": []
    }
  },
  atmSettingsCustomization: {
    "isAtmsSettingsVisible": true,
    "fieldsCustomization": {
      "ATM_SETTINGS_TABS": [{
        "field": "GENERAL_SETTINGS",
        "visible": true
      }, {
        "field": "CASSETES_SETTINGS",
        "visible": true
      }, {
        "field": "NEARBY_BRANCHES_SETTINGS",
        "visible": true
      }, {
        "field": "LIMITATION_AMOUNTS_SETTINGS",
        "visible": true
      }, {
        "field": "LOUK_OUT_SETTINGS",
        "visible": true
      }, {
        "field": "TREATMENT_DEVICE_SETTINGS",
        "visible": true
      }],
      "GENERAL_SETTINGS": [{
        "field": "atm_no",
        "visible": true
      }, {
        "field": "terminal_shva_id",
        "visible": false
      }, {
        "field": "leumi_terminal_id",
        "visible": false
      }, {
        "field": "atm_name",
        "visible": true
      }, {
        "field": "city",
        "visible": false
      }, {
        "field": "address",
        "visible": true
      }, {
        "field": "zip_code",
        "visible": true
      }, {
        "field": "vendor",
        "visible": true
      }, {
        "field": "ip_address",
        "visible": true
      }, {
        "field": "port_number",
        "visible": true
      }, {
        "field": "atm_protocol",
        "visible": true
      }, {
        "field": "rkl_protocol",
        "visible": true
      }, {
        "field": "terminal_group",
        "visible": true
      }, {
        "field": "belong",
        "visible": true
      }, {
        "field": "area",
        "visible": true
      }, {
        "field": "bank_no",
        "visible": true
      }, {
        "field": "branch",
        "visible": true
      }, {
        "field": "branch_name",
        "visible": false
      }, {
        "field": "eng_branch_name",
        "visible": false
      }, {
        "field": "branch_phone",
        "visible": false
      }, {
        "field": "branch_fax",
        "visible": false
      }, {
        "field": "local_currency_trigger",
        "visible": false
      }, {
        "field": "config_id",
        "visible": true
      }, {
        "field": "MAX_BILLS",
        "visible": true
      }],
      "CASSETES_SETTINGS": [{
        "field": "CESSETE_TYPE",
        "visible": true
      }, {
        "field": "CURRENCY_CODE",
        "visible": true
      }, {
        "field": "DENOMINATION",
        "visible": true
      }],
      "NEARBY_BRANCHES_SETTINGS": [{
        "field": "BANK",
        "visible": true
      }, {
        "field": "BRANCH",
        "visible": true
      }, {
        "field": "ADDRESS",
        "visible": true
      }],
      "LIMITATION_AMOUNTS_SETTINGS": [{
        "field": "NOT_OURS_FEE",
        "visible": true
      }, {
        "field": "CLAIM_AMOUNT",
        "visible": true
      }, {
        "field": "LOCAL_CURRENCY_TRIGGER",
        "visible": true
      }, {
        "field": "LOCAL_CURRENCY_TRIGGER2",
        "visible": true
      }],
      "LOUK_OUT_SETTINGS": [{
        "field": "DISABLED_ATM",
        "visible": true
      }, {
        "field": "DISABLE_CHECK_DEPOSIT",
        "visible": true
      }, {
        "field": "DISABLE_RECEIPT",
        "visible": true
      }],
      "TREATMENT_DEVICE_SETTINGS": [{
        "field": "RESPONSIBILITY",
        "visible": true
      }, {
        "field": "COMMENTS_TREATMENT",
        "visible": true
      }, {
        "field": "TREATMENT_START_DATE",
        "visible": true
      }]
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
var mainConnection = [{
  "connectionName": "HSM",
  "statusView": "DISABLE"
}, {
  "connectionName": "BANK",
  "statusView": "GOOD"
}];

var device_status = [{
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
}];

var onlineStatus = {
  "avg": 16.0,
  "currentOnline": 4.9
};

var issuerActionStatus = [{
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
}];

var actionStatus = [{
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
}];
