import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('breeds', {
    path: '/queryParams'
  });

  this.route('dynamic-doggos', { path: '/dynamic/:doggo' });
});

export default Router;
