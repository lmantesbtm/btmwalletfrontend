var button = document.querySelector('#submit-button');

braintree.dropin.create({
  authorization: 'sandbox_yr8fgxx2_d73bs4qznwm68dqw',
  container: '#dropin-container'
}, function (createErr, instance) {
  button.addEventListener('click', function () {
    instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
      // Submit payload.nonce to your server
      if(requestPaymentMethodErr){
        console.log(requestPaymentMethodErr.status);
        return requestPaymentMethodErr.status
      }
      else {
        var price = document.getElementById("amount").value
        payload["amount"] = price;
        $.ajax({
          url: "/checkouts",
          data: JSON.stringify(payload),
          method: "POST",
          dataType: "json",
          processData: false,
          contentType: 'application/json'
        }).fail(function(response){
          return response.status
        });
      }
    });
  });
});
