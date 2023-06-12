const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/productRoutes');
app.use('/', productRoutes); 

app.listen(port, ()=>{
  console.log(`Server listen, port ${port}`);
})