const express = require('express');

const ProductImagesController = require('../Controllers/ProductImages.controller');

const ProductImagesRouter = express.Router();

ProductImagesRouter.route('/productimages').get(ProductImagesController.getProductImages);

module.exports = ProductImagesRouter;
