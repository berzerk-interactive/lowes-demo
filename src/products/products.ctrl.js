import './products.scss'

class productsCtrl {
  constructor(sidenavService, productsService, $mdDialog) {
    this.sidenavService = sidenavService;
    this.productsService = productsService;
    this.$mdDialog = $mdDialog;
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
    this.paragraph = 'This state lazy loads moment js on state change to it';
    this.productsService.getProducts().then(resp => {
      this.data = resp.productList
      this.hero = this.data[0]
      console.log(this.data);
    })

  }
}
productsCtrl.$inject = ['sidenavService', 'productsService', '$mdDialog'];
export default productsCtrl;
