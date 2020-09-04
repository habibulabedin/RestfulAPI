const sql = require('mssql');
const config = require('../config');


module.exports = {
  getFavorite: async (req, res) => {
    try {
      const query = `select * from Favorite where ProductId=${req.query.productId} and CustomerId=${req.query.customerId}`;
      await sql.connect(config);

      const result = await sql.query(query);

      return res.send(result.recordset);
    } catch (error) {
      return res.status(404);
    }
  },
  postFavorite: async (req, res) => {
    try {
      const query = `insert into Favorite values(${req.body.productId},${req.body.customerId})`;
      await sql.connect(config);

      const result = await sql.query(query);

      return res.send(result);
    } catch (error) {
      return res.status(404);
    }
  },
  deleteFavorite: async (req, res) => {
    try {
      const query = `delete from Favorite where ProductId=${req.query.productId} and CustomerId=${req.query.customerId}`;
      await sql.connect(config);

      const result = await sql.query(query);

      return res.send(result);
    } catch (error) {
      return res.status(404);
    }
  },

};
