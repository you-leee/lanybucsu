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
      nextRoute: "/kocsma2",
      mapSource: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10787.546265715233!2d19.037365767760367!3d47.47263987917597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddb1c90ed389%3A0xd2f48e8c828d0fb!2zUmVnZSBTw7Zyw7Z6xZE!5e0!3m2!1sen!2shu!4v1467470951921"
    }
  );
});

module.exports = router;
