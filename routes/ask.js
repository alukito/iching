var express = require('express');
var router = express.Router();
var iChing = require('i-ching');
const querystring = require('querystring');


/* GET users listing. */
router.post('/', function(req, res, next) {  
  var reading = iChing.ask(req.body.ask)
  var changing = reading.change ? {
    changing: JSON.stringify(reading.change.changingLines),
    to: reading.change.to.number
  } : {}

  var paramObj = {
    ...changing,
    question: req.body.ask
  }

  var params = querystring.stringify(paramObj)
  res.redirect(`/result/${reading.hexagram.number}?${params}`)
//   res.json({
//       hexagram: reading.hexagram,
//       change: reading.change,
//       changingLines: reading.changingLines
//   });
});

module.exports = router;