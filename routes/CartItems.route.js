const express = require('express');

const CartItemsController = require('../Controllers/CartItems.controller');

const CartItemsRouter = express.Router();

CartItemsRouter.route('/cartproducts').get(CartItemsController.getCartItems);
CartItemsRouter.route('/cartproducts').post(CartItemsController.postCartItems);
CartItemsRouter.route('/cartproducts').delete(CartItemsController.deleteCartItems);
CartItemsRouter.route('/cartproducts').put(CartItemsController.putCartItems);

module.exports = CartItemsRouter;
