const express = require('express');

const CategoryController = require('../Controllers/Category.controller');

const CategoryRouter = express.Router();

CategoryRouter.route('/categories').get(CategoryController.getCategories);

module.exports = CategoryRouter;
