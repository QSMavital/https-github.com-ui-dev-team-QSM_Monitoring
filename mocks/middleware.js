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
  language: "HE",
  menu: ["MAIN","ATM","HSM","EPP","COMMUNICATION","REPORTS"],
  connections: [],
  atmList: []
};

var customerGeneral ={
  businessDay:  1493626088621,
  customer: "BEINLEUMI"
}
