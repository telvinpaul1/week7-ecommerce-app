let products_list = require('../model/products')


//get all products
const getAllProducts = (req, res)=>{
    return res.json(products_list)
}

//post a product
const postProuct = (req, res)=>{
    const newProduct = req.body;
    products_list.push(newProduct);
    res.json(products_list);

}

//update a product
const updateProduct = (req, res)=>{
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

}
//delete a product
const deleteProduct = (req, res)=>{
    let product_id = Number(req.params.id);
    let deleteProduct = products_list.filter((product) =>product.id !== product_id);

    if(!deleteProduct){
        res.send("Product not found")
    }else{
        products_list = deleteProduct
        res.json(products_list)
    }
}


module.exports = { getAllProducts, postProuct, updateProduct, deleteProduct };
