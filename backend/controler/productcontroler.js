const { Product } = require('../models/index');

exports.get = async (req, res) => {
  try {
    const products = await Product.findAll();    
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
};