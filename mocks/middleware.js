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
    else {
      next();
    }

  }, delay);


};

var settingsUser = {
  language: "EN",
  menu: ["MAIN","ATM","HSM","EPP","COMMUNICATION","REPORTS"],
  atms:{
    tabs:[
      {field:"inventory",visible:true},
      {field:"status",visible:true},
      {field:"notifications",visible:true},
      {field:"events",visible:true},
      {field:"transactions",visible:true}
    ]
  },
  atm:{
    tabs:[
      {field:"status",visible:true},
      {field:"accessories",visible:true},
      {field:"retained-cards",visible:true},
      {field:"settings",visible:true},
      {field:"notifications",visible:true},
      {field:"events",visible:true},
      {field:"transactions",visible:true}
    ]
  },
  connections: [],
  atmList: []
};

var customerGeneral ={
  businessDay:  1493626088621,
  customer: "BEINLEUMI"
}
