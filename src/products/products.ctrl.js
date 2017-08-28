import './products.scss'
import './windows8loader.scss'

class productsCtrl {
  constructor(sidenavService, productsService, $mdDialog, $scope) {
    this.sidenavService = sidenavService;
    this.productsService = productsService;
    this.$mdDialog = $mdDialog;
    this.$scope = $scope;
    this.data = []
    this.hero = null
  }
  toggle(){
    this.sidenavService.toggle();
  }
  productHover (selected) {
    this.hero = selected;
  }
  addToCart (ev) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('You have added to your cart!')
        .textContent(`
          $ ${this.hero.pricing.price.retail}
          ${this.hero.brand} ${this.hero.description}`
        )
        .ok('Got it!')
        .targetEvent(ev)
    );
  }
  $onInit(){
    console.log('$onInit');
    this.productsService.getProducts().then(resp => {
      console.log('then');
      this.data = resp.productList
      this.hero = this.data[0]
      console.log(this.data);
      this.$scope.apply();
    })

  }
}
productsCtrl.$inject = ['sidenavService', 'productsService', '$mdDialog', '$scope'];
export default productsCtrl;
