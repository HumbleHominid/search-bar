import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
    model(params) {
        let returns = { breed: params.doggo };
        // ajax to get the breed data
        return $.getJSON(`/${params.doggo}.json`)
        .then((data) => {
            returns.data = data;
          // update breedData with retrieved data on success
          return returns;
        })
        .catch((err) => {
          // update breedData with null on fail
          return returns;
        });
    }
});
