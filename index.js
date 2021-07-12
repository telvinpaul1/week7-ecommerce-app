const express = require('express')
const app = express()
const port = 3000
let products_list = require ("./model/products")
//const bodyParser = require("body-parser")


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send ("Welcome to API")
  });
  

//get all friends list
app.get('/products', (req, res) => {
  res.json(products_list)
});

//using post to create new 

app.post('/products',  (req, res)=>{
    const newProduct = req.body;
    products_list.push(newProduct);
    res.json(products_list);

})

app.put('/products/:id',  (req, res)=>{
    let product_id = Number(req.params.id);
    let body = req.body;
    let productToUpdate = products_list.find((product) => product.id === product_id );
    let index = products_list.indexOf(productToUpdate);

    if(!productToUpdate){
        res.send("Product not found")
    }else{
        let updateProduct = {...productToUpdate, ...body};
        products_list[index] = updateProduct
        res.json(updateProduct)
    }

})

app.delete('/products/:id', (req, res)=>{
    let product_id = Number(req.params.id);
    let deleteProduct = products_list.filter((product) =>product.id !== product_id);

    if(!deleteProduct){
        res.send("Product not found")
    }else{
        products_list = deleteProduct
        res.json(products_list)
    }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})