const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   // res.send('Hello World!')
//   res.render('dist/index.html')
// })
app.use(express.static('dist'))
var request = require('request');
app.get('/api/products', function(req,res) {
  var newurl = 'http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1';
  request(newurl).pipe(res);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
