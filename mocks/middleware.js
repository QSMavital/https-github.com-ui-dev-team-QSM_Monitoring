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
    else {
      next();
    }

  }, delay);


};

var settingsUser = {
  language: "EN",
  menu: ["MAIN","ATM","HSM","EPP","COMMUNICATION","REPORTS"],
  connections: [],
  atmList: []
};
