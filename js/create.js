async function createProduct(event) {
    event.preventDefault(); 
  
    const form = document.getElementById('productForm');
    const name = form.elements.name.value;
    const price = form.elements.price.value;
  
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price })
      });
  
      if (response.ok) {
        console.log('Producto creado exitosamente');
        getProducts();
      } else {
        console.error('Error al crear el producto:', response.status);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  }
  
  const form = document.getElementById('productForm');
  form.addEventListener('submit', createProduct);
