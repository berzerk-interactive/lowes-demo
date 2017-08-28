function config ($stateProvider, $locationProvider,$urlRouterProvider, $ocLazyLoadProvider) {
  const appState = {
    name:'app',
    url: "/",
    redirectTo: 'products'
  };
  const oneState = {
      name: 'about',
      url: '/about',
      views: {
        side: 'helloSide',
        content: 'about',
      }
    };
  const products = {
      name: 'products',
      url: '/products',
      views: {
        side: 'helloSide',
        content: 'products',
      }
    };
  $stateProvider.state(oneState);
  $stateProvider.state(products);
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/products");
  $ocLazyLoadProvider.config({debug: true});
}
config.$inject =['$stateProvider', '$locationProvider','$urlRouterProvider', '$ocLazyLoadProvider'];
export default config;
