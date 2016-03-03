import Ember from 'ember';

export function cartTotal(params) {
  var total = 0;
  for (var i = 0; i < params[0].length; i++) {
    var replacedString = params[0][i].get('price').replace(/[,]/, "").replace(/[$]/, "");
    console.log(replacedString);
    total += parseInt(replacedString);

  }
  return total;
}

export default Ember.Helper.helper(cartTotal);
