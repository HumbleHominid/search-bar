import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        breedSearch(breed) {
            this.transitionToRoute('dynamic-doggos', breed);
        }
    }
});
