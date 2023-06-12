const Product = require('../model/productModel');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const product = new Product();
      const products = await product.getAllProducts();
      res.json(products);
    } catch (error) {
      console.log('Error al obtener los productos: ', error);
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  },
  createProduct: async (req, res) => {
    const product = new Product();
    try{
      const { name, price } = req.body;
      await product.createProduct({ name, price });
      res.status(201).json({ message: 'Producto Agregado Exitosamente'});
    }catch(error){
      console.log('Error al crear el producto: ', error);
      res.status(500).json({ error: 'Error al crear el producto' })
    }
  },
  
  deleteProduct: async (req, res) => {
    const product = new Product();
    try {
      const productId = req.params.id;
      await product.deleteProduct(productId);
      res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
      console.log('Error al eliminar el producto:', error);
      res.status(500).json({ error: 'Error al eliminar el producto' });
    }
  }
}

module.exports = productController;