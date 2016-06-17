import Ember from 'ember';

export function icon(params) {

  var priceIcon = params[0].get('price');

  if (priceIcon >= 40) {
    return '$$$$';
  } else if (priceIcon >= 30) {
    return '$$$';
  } else if (priceIcon >= 20) {
    return '$$';
  } else if (priceIcon <= 10) {
    return '$';
  }
}

export default Ember.Helper.helper(icon);
