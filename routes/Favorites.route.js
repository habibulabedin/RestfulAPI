const express = require('express');

const FavoritesController = require('../Controllers/Favorites.controller');

const FavoritesRouter = express.Router();

FavoritesRouter.route('/Favorites').get(FavoritesController.getFavorite);
FavoritesRouter.route('/Favorites').post(FavoritesController.postFavorite);
FavoritesRouter.route('/Favorites').delete(FavoritesController.deleteFavorite);

module.exports = FavoritesRouter;
