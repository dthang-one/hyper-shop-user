const Product = require('../models/product');

exports.getCategoriesQuantity = async function getCategoriesQuantity() {
  let res = [];
  let cats = [];
  cats = await Product.distinct('category');
  for (c of cats) {
    const quantity = await Product.count({ category: c });
    res.push({
      name: c,
      quantity,
    });
  }
  return res;
}