var express = require('express');
var request = require('request');
var url = require('url');
var gateway = require('../lib/gateway');

var router = express.Router();

function formatErrors(errors) {
  var formattedErrors = '';

  for (var i in errors) { // eslint-disable-line no-inner-declarations, vars-on-top
    if (errors.hasOwnProperty(i)) {
      formattedErrors += 'Error: ' + errors[i].code + ': ' + errors[i].message + '\n';
    }
  }
  return formattedErrors;
}

router.get('/', function(req,res,next) {
  res.json({"message":"hello"});
})

router.get('/checkouts/:id', function (req, res) {
  var result;
  var transactionId = req.params.id;

  gateway.transaction.find(transactionId, function (err, transaction) {
    result = createResultObject(transaction);
    res.render('checkouts/show', {transaction: transaction, result: result});
  });
});

router.post('/checkouts', function (req, res, next) {
  var transactionErrors;
  var amount = req.body.amount; // In production you should not take amounts directly from clients
  var nonce = req.body.nonce;
  var resultObj = {}

  gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonce,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    if (result.success || result.transaction) {
      //res.redirect('checkouts/' + result.transaction.id);
      console.log(result)
      res.json(result);

    } else {
      transactionErrors = result.errors.deepErrors();
      //req.flash('error', {msg: formatErrors(transactionErrors)});
      //res.redirect('/checkouts');
      res.json({msg: formatErrors(transactionErrors)});
    }
  });
});

module.exports = router;
