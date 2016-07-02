var express = require('express');
var router = express.Router();

var answers = {
  matek1: "6",
  szeretiatik: "helyes"
};

router.get('/', function(req, res, next) {
  res.render('rege',
    {
      postRoute: "/kocsma1",
      answers: {
        matek1: undefined,
        szeretiatik: undefined
      },
      passed: false,
      nextRoute: "/kocsma1/ivas"
  });
});

router.post('/', function(req, res, next) {
  //var fields = [];
  console.log(req.body);
  console.log(answers);

  var responseBody = {postRoute: "/kocsma1", answers: {}, nextRoute: "/kocsma1/ivas"};
  var passed = true;

  for(var attributename in req.body){
    if(req.body[attributename] == answers[attributename]) {
      responseBody.answers[attributename] = answers[attributename];
    } else {
      responseBody.answers[attributename] = undefined;
      passed = false;
    }
  }
  responseBody.passed = passed;

  console.log(responseBody);
  res.render('rege', responseBody);
});

router.get('/ivas', function(req, res, next) {
  res.render('ivas',
    {
      nextRoute: "/kocsma2"
    }
  );
});

module.exports = router;
