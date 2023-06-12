const root = document.getElementById('root');

const  showData = async (data) => {
    let HTML = '';
    data.forEach(element =>{
        HTML += `
        <p>${element.name}</p>
        <p>${element.price}</p>
        <img src="${element.image}">
        <button onclick="deleteProduct(${element.id})">Eliminar</button>
        `
        root.innerHTML = HTML;
    });
}

const getProducts = async () => {
    try{
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        showData(data);
    }catch(error){
        console.error('error al obtener los datos: ', error);
    }
}

window.addEventListener('load', ()=>{
    getProducts();
});

