var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('rocktogon',
    {
      nextRoute: "/kocsma4/ivas"
  });
});

router.get('/ivas', function(req, res, next) {
  res.render('ivas',
    {
      nextRoute: undefined,
      mapSource: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21567.90893547526!2d19.03840598848702!3d47.49013511731445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4741dc52d87e2f25%3A0x7d8129fb092a60b6!2sBudapest%2C+Martos+Csocs%C3%B3+Klub%2C+Stoczek+u.+5-7%2C+1111!3m2!1d47.4787597!2d19.055820999999998!4m5!1s0x4741dc6c4b06cfa5%3A0x8473dcc7f15bdc91!2sRocktogon%2C+Budapest%2C+Mozs%C3%A1r+Street!3m2!1d47.5047784!2d19.060599699999997!5e0!3m2!1sen!2shu!4v1467471067656"
    }
  );
});

module.exports = router;