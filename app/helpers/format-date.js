import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  var today = new Date(params*1000);

  // TODO use a better way to do this (i.e: momentsjs)
  return today.toISOString().slice(0, 10) + ' ' +
  today.getHours()  + ':' +  today.getMinutes();
}

export default Ember.Helper.helper(formatDate);
