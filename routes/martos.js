var express = require('express');
var router = express.Router();

var answers = {
  lotyi: "martos",
};

router.get('/', function(req, res, next) {
  res.render('martos', {
    postRoute: "/kocsma3",
    nextRoute: "/kocsma3/ivas",
    answers: {},
    passed: false
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(answers);

  var responseBody = {postRoute: "/kocsma3", answers: {}, nextRoute: "/kocsma3/ivas"};
  var passed = true;

  if(req.body.martos.toLowerCase() === answers.martos) {
    responseBody.answers.martos = req.body.martos;
  } else {
    responseBody.answers.martos = undefined;
    passed = false;
  }

  responseBody.passed = passed;

  console.log(responseBody);
  res.render('martos', responseBody);
});

router.get('/ivas', function(req, res, next) {
  res.render('ivas',
    {
      nextRoute: "/kocsma4",
      mapSource: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2696.5841136001345!2d19.051297565080628!3d47.47853327917635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x4741ddb2a1c5ba71%3A0x25d2b1fc2911b960!2sHappy+Drink+Bar%2C+Budapest%2C+Bercs%C3%A9nyi+Street!3m2!1d47.477542199999995!2d19.0510698!4m5!1s0x4741dc52d87e2f25%3A0x7d8129fb092a60b6!2sBudapest%2C+Martos+Csocs%C3%B3+Klub%2C+Stoczek+Street!3m2!1d47.4787597!2d19.055820999999998!5e0!3m2!1sen!2shu!4v1467469692657"
    }
  );
});

module.exports = router;