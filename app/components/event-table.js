import Ember from 'ember';

export default Ember.Component.extend({
  startInterval() {
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
   toggleBody() {
     this.events.update();
     this.startInterval();
   }
 }
});
