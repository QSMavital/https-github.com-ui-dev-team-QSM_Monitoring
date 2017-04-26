module.exports = function (req, res, next) {
  // res.header('X-Hello', 'World');
  // console.log('url', req.url);
  // console.log('method', req.method);
  // console.log('body', req.body);
  //
  var delay = 1000;


  setTimeout(function () {

    if (req.url.indexOf('ND02_400') !== -1) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({"aaaa":"s"}));
    }
    else {
      next();
    }

  }, delay);


};
