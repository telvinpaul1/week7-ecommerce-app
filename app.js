const express = require('express')
const app = express()
const port = 3000
const productRouter = require('./routes/Products')
const userRouter = require('./routes/User')
//const bodyParser = require("body-parser")


app.use(express.json());
app.use(express.urlencoded({extended:true}))

//product route 
app.use('/products', productRouter)

//user route
app.use('/user', userRouter)   
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})