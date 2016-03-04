import Ember from 'ember';

export function cartTotal(params) {
  var total = 0;
  console.log(params[0]);
  for (var i = 0; i < params[0].item.length; i++) {
    var replacedString = params[0][i].get('price').replace(/[,]/, "").replace(/[$]/, "");
    total += parseInt(replacedString);

  }
  return parseInt(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).toFixed(2);
}

export default Ember.Helper.helper(cartTotal);
