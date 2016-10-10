import Ember from 'ember';

export default Ember.Component.extend({
  startInterval() {
    // we don't want to refresh again if we just refreshed the page.
    // Thus, resetting the interval
    if (this.refreshInterval){
      clearInterval(this.refreshInterval);
    }
    var $this = this;
    this.refreshInterval = setInterval(() => {
      $this.events.update();
    },30000);
  },

  init(){
    this._super(...arguments);
  },

  didRender(){
    // When our component mounts, we start the automatic refresh cuntdown
    this.startInterval();
  },

  actions: {
   refresh() {
     this.events.update();
     this.startInterval();
   }
 }
});
