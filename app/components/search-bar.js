import Component from '@ember/component';

export default Component.extend({
  actions: {
    formSubmit(e) {
      // prevent submit from reloading the page
      e.preventDefault();

      // get the textarea data
      var textareaData = this.$('#searchBar')[0].value;

      // call the action above
      this.get('submitAction') (textareaData);
    }
  }
});
