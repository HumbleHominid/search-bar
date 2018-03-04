import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: [ 'breed' ],

  actions: {
    breedSearch(searchData) {
      // create qp object
      var qp = {
        queryParams: {
          breed: searchData
        }
      };

      // attempts to get the breedQuery json from the public dir
      return $.getJSON(`${searchData}.json`).then((data) => {
        this.set('model', data);

        this.notifyPropertyChange('model')
        // transition with data recieved
        return this.transitionToRoute(data, qp);
      })
      .catch((err) => {
        this.set('model', null);
        // transition with null model
        return this.transitionToRoute(null, qp);
      });
    }
  }
});
