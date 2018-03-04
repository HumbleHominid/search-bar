import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  queryParams: [ 'breed' ],
  breedData: null,

  init() {
    this._super(...arguments);

    // Handles detecting changes to breed caused by the queryParam changes
    this.addObserver('breed', this, 'updateBreedData');
  },

  updateBreedData(sender, key, value, rev) {
    // ajax to get the breed data
    $.getJSON(`${this.get(key)}.json`)
    .then((data) => {
      // update breedData with retrieved data on success
      return this.set('breedData', data);
    })
    .catch(() => {
      // update breedData with null on fail
      return this.set('breedData', null);
    });
  },
  actions: {
    breedSearch(searchData) {
      // adjust the queryParams
      this.transitionToRoute({
        queryParams: {
          breed: searchData
        }
      });
    }
  }
});
