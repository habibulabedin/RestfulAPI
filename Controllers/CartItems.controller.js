const sql = require('mssql');
const config = require('../config');

module.exports = {
  getCartItems: async (req, res) => {
    try {
      const query = `select * from CartProduct where CustomerId=${req.query.customerId} and ProductId=${req.query.productId}`;

      await sql.connect(config);

      const result = await sql.query(query);

      return res.send(result.recordset);
    } catch (error) {
      return res.status(404);
    }
  },
  postCartItems: async (req, res) => {
    try {
      const query = `insert into CartProduct values(${req.body.CustomerId},${req.body.ProductId},${req.body.Count})`;
      await sql.connect(config);

      const result = await sql.query(query);

      return res.send(result);
    } catch (error) {
      return res.status(404);
    }
  },
  deleteCartItems: async (req, res) => {
    try {
      const query = `delete from CartProduct where CustomerId=${req.query.customerId} and ProductId=${req.query.productId}`;
      await sql.connect(config);

      const result = await sql.query(query);

      return res.send(result);
    } catch (error) {
      return res.status(404);
    }
  },
  putCartItems: async (req, res) => {
    try {
      const query = `update CartProduct set Count=${req.body.Count} where CustomerId=${req.body.customerId} and ProductId=${req.body.productId}`;
      await sql.connect(config);

      const result = await sql.query(query);

      return res.send(result);
    } catch (error) {
      return res.status(404);
    }
  },

};
