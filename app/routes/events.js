import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //var events =  this.get('store').findAll('events');

  var events = [ {
      "id" : 17546,
      "version" : 1,
      "createdOn" : 1475961762,
      "modifiedOn" : 1475961762,
      "name" : "Container Killed",
      "description" : "Event: kill; Image: ltagliamonte/counterapp; ID: a6b2edb7f72b3b17f70d23fe46d8045d20733b4ab557b648bdae84d7fc57657b; Name: k8s_javaapp.1e53f6c_javaapp-3954035907-7u0at_prod_ddd8df46-8ca6-11e6-b808-0a770e132b37_2c68d8fd",
      "severity" : 4,
      "filter" : "host.mac=0a:77:0e:13:2b:37 and container.id=a6b2edb7f72b",
      "timestamp" : 1475961729,
      "tags" : [{
        key: "source",
        value: "docker"
      }]
    }, {
      "id" : 17544,
      "version" : 1,
      "createdOn" : 1475961753,
      "modifiedOn" : 1475961753,
      "name" : "Container Killed",
      "description" : "Event: kill; Image: ltagliamonte/counterapp; ID: 0642802f5b4f3d30599af3b5bf0f9843b11d9eea7b88bf5540a03aa5d9cdbe7b; Name: k8s_javaapp.a0a93da9_javaapp-2458569569-n6b7n_dev_1e449748-8ca6-11e6-b808-0a770e132b37_1894854c",
      "severity" : 4,
      "filter" : "host.mac=0a:77:0e:13:2b:37 and container.id=0642802f5b4f",
      "timestamp" : 1475961720,
      "tags" : {
        "source" : "docker"
      }
    }, {
      "id" : 17545,
      "version" : 1,
      "createdOn" : 1475961753,
      "modifiedOn" : 1475961753,
      "name" : "Container Killed",
      "description" : "Event: kill; Image: ltagliamonte/counterapp; ID: 232662bc4bbf7b7db2ade95b11656d1f002243778db81c3967a18b398b760a36; Name: k8s_javaapp.1e53f6c_javaapp-3954035907-b0okb_prod_ddd9892c-8ca6-11e6-b808-0a770e132b37_506f698d",
      "severity" : 4,
      "filter" : "host.mac=0a:77:0e:13:2b:37 and container.id=232662bc4bbf",
      "timestamp" : 1475961720,
      "tags" : {
        "source" : "docker"
      }
    }, {
      "id" : 17543,
      "version" : 1,
      "createdOn" : 1475961732,
      "modifiedOn" : 1475961732,
      "name" : "Container Killed",
      "description" : "Event: kill; Image: ltagliamonte/counterapp; ID: a6b2edb7f72b3b17f70d23fe46d8045d20733b4ab557b648bdae84d7fc57657b; Name: k8s_javaapp.1e53f6c_javaapp-3954035907-7u0at_prod_ddd8df46-8ca6-11e6-b808-0a770e132b37_2c68d8fd",
      "severity" : 4,
      "filter" : "host.mac=0a:77:0e:13:2b:37 and container.id=a6b2edb7f72b",
      "timestamp" : 1475961699,
      "tags" : {
        "source" : "docker"
      }
    }, {
      "id" : 17541,
      "version" : 1,
      "createdOn" : 1475961723,
      "modifiedOn" : 1475961723,
      "name" : "Container Killed",
      "description" : "Event: kill; Image: ltagliamonte/counterapp; ID: 0642802f5b4f3d30599af3b5bf0f9843b11d9eea7b88bf5540a03aa5d9cdbe7b; Name: k8s_javaapp.a0a93da9_javaapp-2458569569-n6b7n_dev_1e449748-8ca6-11e6-b808-0a770e132b37_1894854c",
      "severity" : 4,
      "filter" : "host.mac=0a:77:0e:13:2b:37 and container.id=0642802f5b4f",
      "timestamp" : 1475961690,
      "tags" : {
        "source" : "docker"
      }
    }, {
      "id" : 17545,
      "version" : 1,
      "createdOn" : 1475961753,
      "modifiedOn" : 1475961753,
      "name" : "Container Killed",
      "description" : "Event: kill; Image: ltagliamonte/counterapp; ID: 232662bc4bbf7b7db2ade95b11656d1f002243778db81c3967a18b398b760a36; Name: k8s_javaapp.1e53f6c_javaapp-3954035907-b0okb_prod_ddd9892c-8ca6-11e6-b808-0a770e132b37_506f698d",
      "severity" : 4,
      "filter" : "host.mac=0a:77:0e:13:2b:37 and container.id=232662bc4bbf",
      "timestamp" : 1475961720,
      "tags" : {
        "source" : "docker"
      }
    }, {
      "id" : 17543,
      "version" : 1,
      "createdOn" : 1475961732,
      "modifiedOn" : 1475961732,
      "name" : "Container Killed",
      "description" : "Event: kill; Image: ltagliamonte/counterapp; ID: a6b2edb7f72b3b17f70d23fe46d8045d20733b4ab557b648bdae84d7fc57657b; Name: k8s_javaapp.1e53f6c_javaapp-3954035907-7u0at_prod_ddd8df46-8ca6-11e6-b808-0a770e132b37_2c68d8fd",
      "severity" : 4,
      "filter" : "host.mac=0a:77:0e:13:2b:37 and container.id=a6b2edb7f72b",
      "timestamp" : 1475961699,
      "tags" : {
        "source" : "docker"
      }
    }, {
      "id" : 17541,
      "version" : 1,
      "createdOn" : 1475961723,
      "modifiedOn" : 1475961723,
      "name" : "Container Killed",
      "description" : "Event: kill; Image: ltagliamonte/counterapp; ID: 0642802f5b4f3d30599af3b5bf0f9843b11d9eea7b88bf5540a03aa5d9cdbe7b; Name: k8s_javaapp.a0a93da9_javaapp-2458569569-n6b7n_dev_1e449748-8ca6-11e6-b808-0a770e132b37_1894854c",
      "severity" : 4,
      "filter" : "host.mac=0a:77:0e:13:2b:37 and container.id=0642802f5b4f",
      "timestamp" : 1475961690,
      "tags" : {
        "source" : "docker"
      }
    } ];

    window.events = events;
    return events;
  }
});
