const express = require('express');

const ProductsController = require('../Controllers/Products.controller');

const ProductsRouter = express.Router();

ProductsRouter.route('/products').get(ProductsController.getProducts);

module.exports = ProductsRouter;
