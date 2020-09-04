const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const CategoryRouter = require('./routes/Category.route');

const ProductsRouter = require('./routes/Products.route');

const ProductsCategoryRoute = require('./routes/ProductsCategory.route');

const ProductImagesRoute = require('./routes/ProductImages.route');

const UsersRoute = require('./routes/User.route');

const FavouritesRoute = require('./routes/Favorites.route');

const CartItemsRoute = require('./routes/CartItems.route');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

app.use('/api', CategoryRouter);
app.use('/api', ProductsRouter);
app.use('/api', ProductsCategoryRoute);
app.use('/api', ProductImagesRoute);
app.use('/api', UsersRoute);
app.use('/api', FavouritesRoute);
app.use('/api', CartItemsRoute);

const port = process.env.PORT || 4000;

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
