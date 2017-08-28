class productsService {
  getProducts () {
    let url;
    switch (process.env.NODE_ENV) {
      case 'development':
        url = './products/data.json'
        break;
      case 'production':
        url = 'api/products/'
        break;
      default:
        url = './products/data.json'
    }
    return fetch(url).then(resp => resp);
  }
}

export default productsService;
