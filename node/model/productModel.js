const connection = require('../config/db');


class Product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    async createProduct(productData) {
        try {
          const { name, price } = productData;
          const sql = 'INSERT INTO prod (name, price) VALUES (?, ?)';
          const [rows] = await connection.query(sql, [name, price]);
        } catch (error) {
          console.log('Error al ejecutar la consulta SQL: ', error);
          throw error;
        }
      }

      async getAllProducts() {
        try {
          const sql = 'SELECT * FROM prod';
          const [rows] = await connection.query(sql);
          return rows;
        }catch (error) {
          console.log('Error al ejecutar la consulta SQL: ', error);
          throw error;
        }
      }

      async deleteProduct(productId) {
        try {
          const sql = 'DELETE FROM prod WHERE id = ?';
          await connection.query(sql, [productId]);
        }catch (error) {
          console.log('Error al eliminar el producto:', error);
          throw error;
        }
      }
}

module.exports = Product;