var express = require('express');
var router = express.Router();

var answers = {
  lotyi: "lötyi",
};

router.get('/', function(req, res, next) {
  res.render('lotyi', {
    postRoute: "/kocsma2",
    nextRoute: "/kocsma2/ivas",
    answers: {},
    passed: false
  });
});

router.post('/', function(req, res, next) {
  //var fields = [];
  console.log(req.body);
  console.log(answers);

  var responseBody = {postRoute: "/kocsma2", answers: {}, nextRoute: "/kocsma2/ivas"};
  var passed = true;

  if(req.body.lotyi.toLowerCase() === answers.lotyi) {
    responseBody.answers.lotyi = req.body.lotyi;
  } else {
    responseBody.answers.lotyi = undefined;
    passed = false;
  }

  responseBody.passed = passed;

  console.log(responseBody);
  res.render('lotyi', responseBody);
});

router.get('/ivas', function(req, res, next) {
  res.render('ivas',
    {
      nextRoute: "/kocsma3",
      mapSource: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d10787.138354078244!2d19.039389131977003!3d47.474627016815845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4741ddb1c90ed389%3A0xd2f48e8c828d0fb!2zQnVkYXBlc3QsIFJlZ2UgU8O2csO2esWRLCBGZWjDqXJ2w6FyaSDDunQgMzIsIDExMTc!3m2!1d47.4726399!2d19.0461205!4m5!1s0x4741ddb2a1c5ba71%3A0x25d2b1fc2911b960!2sHappy+Drink+Bar%2C+Budapest%2C+Bercs%C3%A9nyi+Street!3m2!1d47.477542199999995!2d19.0510698!5e0!3m2!1sen!2shu!4v1467469462814"
    }
  );
});

module.exports = router;