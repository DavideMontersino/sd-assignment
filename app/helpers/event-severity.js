import Ember from 'ember';

// TODO fake associations - no clue what the severity indicates

const labels = [
  'panel-primary',
  'panel-success',
  'panel-info',
  'panel-warning',
  'panel-danger'
];

export function eventSeverity(params/*, hash*/) {
  var ret = labels[params];
  return ret;
}

export default Ember.Helper.helper(eventSeverity);
