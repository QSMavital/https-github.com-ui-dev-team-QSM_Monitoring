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
        ActionStatus
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
  dashboard:{
    widgets:[
      {field: "ConnectionStatusComponent", visible: true},
      {field: "DevicesStatusComponent", visible: true},
      {field: "OnlineStatusComponent", visible: true},
      {field: "IssuerActionsStatusComponent", visible: true},
      {field: "ActionsStatusComponent", visible: true}
    ]
  },
  atms: {
    tabs: [
      {field: "INVENTORY_OF_ATMS", visible: true},
      {field: "status", visible: true},
      {field: "ALL_ALERTS", visible: true},
      {field: "ALL_EVENTS", visible: true},
      {field: "ALL_MOVEMENTS", visible: true}
    ]
  },
  atm: {
    tabs: [
      {field: "status", visible: true},
      {field: "accessories", visible: true},
      {field: "retained-cards", visible: true},
      {field: "settings", visible: true},
      {field: "notifications", visible: true},
      {field: "events", visible: true},
      {field: "transactions", visible: true}
    ]
  },
  connections: [],
  atmList: []
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
  "avg": 5.0,
  "currentOnline": 3
};

var issuerActionStatus = [{
  "bank": "LEUMI",
  "noError": 19050,
  "fatal": 50
}, {
  "bank": "BOJ",
  "noError": 16000,
  "fatal": 20
}, {
  "bank": "YAHAV",
  "noError": 13000,
  "fatal": 70
}];

var ActionStatus = [{
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
