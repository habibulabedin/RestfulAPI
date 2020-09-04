const sql = require('mssql');
const config = require('../config');

module.exports = {
  getProducts: async (req, res) => {
    try {
      const query = 'select * from Product';

      await sql.connect(config);

      const result = await sql.query(query);

      return res.send(result.recordset);
    } catch (error) {
      return res.status(404);
    }
  },

};
