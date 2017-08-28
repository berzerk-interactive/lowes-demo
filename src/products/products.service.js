class productsService {
  getProducts () {
    return fetch('./products/data.json').then(resp => resp);
  }
}

export default productsService;
