const express = require('express');

const UsersController = require('../Controllers/User.controller');

const UsersRouter = express.Router();

UsersRouter.route('/customers').get(UsersController.getUsers);

module.exports = UsersRouter;
