import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('post', {per_page: 10});
  }
});
