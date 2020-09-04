const express = require('express');

const ProductsCategoryController = require('../Controllers/ProductsCategory.controller');

const ProductsCategoryRouter = express.Router();

ProductsCategoryRouter.route('/productcategories').get(ProductsCategoryController.getProductsCategory);

module.exports = ProductsCategoryRouter;
