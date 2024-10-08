import EmberRouter from '@ember/routing/router';
import config from 'verenigingsloket/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('dashboard', function () {
    this.route('search');
    this.route('favorites');
  });
  this.route('cases', function () {
    this.route('search');
  });
  this.route('submissions', function () {
    this.route('new');
    this.route('submission', { path: '/:case_id' });
    this.route('submitted', { path: '/:case_id/submitted' });
    this.route('submitted-form');
    this.route('final');
  });
  this.route('email');
  this.route('settings', function () {
    this.route('newsletter');
  });
  this.route('updates');
  this.route('messages', function () {
    this.route('search');
    this.route('detail');
  });
  this.route('data', function () {
    this.route('search');
    this.route('detail');
  });
  this.route('sparql');
});
