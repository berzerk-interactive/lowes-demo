import "style-loader!css-loader!sass-loader!../node_modules/angular-material/angular-material.scss";
import config from './config';
import leftCtrl from './sidenav/left.ctrl';
import aboutCtrl from './about/about.ctrl';
import productsCtrl from './products/products.ctrl';
import sidenavService from './sidenav/sidenav.service';
import productsService from './products/products.service';
import run from './app.run';
angular.module('app', [
  'ui.router',
  'ngMaterial',
  'oc.lazyLoad'
])
.run(run)
.service('productsService', productsService)
.config(config)
.service('sidenavService', sidenavService)
.component('helloSide', {
  template: '<h1>helloSide</h1>',
})
.component('sideNav', {
  controller: leftCtrl,
  template: require('./sidenav/sidenav.html'),
})
.component('about', {
  controller: aboutCtrl,
  template: require('./about/about.html'),
})
.component('products', {
  controller: productsCtrl,
  template: require('./products/products.html'),
})
