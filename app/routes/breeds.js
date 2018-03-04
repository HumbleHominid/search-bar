import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  init() {
    this._super(...arguments);
    this.addObserver('model', this, 'fooDidChange');
  },

  fooDidChange(sender, key, value, rev) {
    // your code
    console.log(sender, key, value, rev)
  },
  model(params) {
    // attempts to get the breedQuery json from the public dir
    return $.getJSON(`${params.breed}.json`).then((data) => {
      return data;
    })
    .catch((err) => {
      return null;
    });
  }
});
