const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const productRouter = require('./routes/Products')
const userRouter = require('./routes/User')
//const bodyParser = require("body-parser")


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res, next) => {
  res.send('Welcome to my API');
  next()
})
//product route 
app.use('/products', productRouter)

//user route
app.use('/user', userRouter)   
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
