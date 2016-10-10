import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  version: DS.attr(),
  modifiedOn: DS.attr(),
  description: DS.attr(),
  tags: DS.attr(),
  timestamp: DS.attr(),
  severity: DS.attr(),
  filter: DS.attr(),
  createdOn: DS.attr()
});
