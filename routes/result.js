var express = require('express');
var router = express.Router();
var iChing = require('i-ching');
const querystring = require('querystring');


/* GET users listing. */
router.get('/:hexa_id', function(req, res, next) {  
  var from = iChing.hexagram(Number(req.params.hexa_id))
  var changing = req.query.changing
  var to = iChing.hexagram(Number(req.query.to))
  res.render('result', {
    from: {
      number: from.number,
      char: from.character,
      name: from.pinyinName
    },
    changing: JSON.parse(changing).reverse(),
    to: {
      number: to.number,
      char: to.character,
      name: to.pinyinName
    },
    question: req.query.question
  })
});

module.exports = router;