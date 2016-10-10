import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: 'https://app-staging.sysdigcloud.com',
  headers: {
    // TODO this should be server side, on a proxy service or similar,
    // and we should have an auth mechanism (i.e.: cookie based or JWT)
    Authorization: 'Bearer 8aef9517-3070-4090-b55e-83296cee8cd1'
  }
});
