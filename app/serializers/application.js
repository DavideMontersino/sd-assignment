import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  normalizeResponse (store, primaryModelClass, payload) {

    // TODO each type should have different adapters

    var events = payload.events.map((item)=>{
      item.type = 'events';

      // TODO check that all attributes are actually rendered
      var tags = Object.keys(item.tags).map((key) => {
        return {
          key: key,
          value: item.tags[key]
        };
      });

      item.attributes = {
        'created-on': item.createdOn,
        version:  item.version,
        timestamp:  item.timestamp,
        description: item.description,
        filter: item.filter,
        'modified-on': item.modifiedOn,
        name: item.name,
        severity: item.severity,
        tags: tags
      };

      delete item.createdOn;
      delete item.version;
      delete item.timestamp;
      delete item.description;
      delete item.filter;
      delete item.modifiedOn;
      delete item.name;
      delete item.severity;
      delete item.tags;

      return item;
    });
    payload.data = events;

    console.log(events);
    return payload;
  }
});
