async function deleteProduct(productId) {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        console.log('Producto eliminado exitosamente');
        getProducts();
        const emptyResponse = await fetch('http://localhost:3000/products');
        const emptyData = await emptyResponse.json();
        if (emptyData.length === 0) {
          root.innerHTML = '';
        }
      } else {
        console.error('Error al eliminar el producto:', response.status);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud DELETE:', error);
    }
  }