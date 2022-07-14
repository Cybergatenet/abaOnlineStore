const express = require("express")
const PATH = require("path")
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const app = express()
const JOI = require('joi')


// Import DB connection
const sql = require('./MODULES/config/dbcon')
// const { useParams } = require("react-router-dom")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// Fetching All Products
app.get('/api/products', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // REST-API
    const dbs = sql.query("SELECT * FROM `realproduct`", (err, result) => {
        if(err) throw err;

        if(result){
            res.json(result)
            console.log(result)
            // res.json({data: ['Hello', 'World']})
        }
    })
})

// Fetch by Category
app.get('/api/products/:type', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // REST-API
    const type = req.params.type
    const dbs = sql.query("SELECT * FROM `realproduct` WHERE `product_cat`='"+type+"'", (err, result) => {
        if(err) throw err;

        if(result){
            res.json(result)
        }
    })
})

// Fetch Single
app.get('/api/product/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // REST-API
    const id = req.params.id
    sql.query("SELECT * FROM `realproduct` WHERE product_id=?", id, (err, result) => { // Prepared Statement
        if(err) throw err;

        if(result){
            res.json(result)
        }
    })
})


// Create Product
app.post('/api/post/product/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // REST-API - Respresentative state transfer Pattern/protocol 
    
    const product_name = req.body.productName
    const product_size = req.body.productSize
    const product_qty = req.body.productQty
    const product_price = req.body.productPrice
    const product_desc = req.body.productDesc
    const product_img = req.body.productImg
    const product_cat = req.body.productCat


    // sql.query("INSERT INTO `realproduct` (`product_id`, `product_name`, `product_size`, `product_quantity`, `product_price`, `product_desc`, `product_img`, `product_cat`) VALUES (NULL, 'scanner', '230X250', '15', '20000', 'This is a sample product', 'sample.png', 'apliance')")

    sql.query("INSERT INTO `realproduct`(`product_id`,`product_name`, `product_size`, `product_qty`, `product_price`, `product_desc`, `product_img`, `product_cat`) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", 8, product_name, product_size, product_qty, product_price, product_desc, product_img, product_cat, (err, result) => { // Prepared Statement
        if(err) throw err;

        if(result){
            res.json(result)
            console.log(result)
            // res.json({data: ['Hello', 'World']})
        }
    })
})

//  Edit Product
app.post('/api/post/product/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const product_name = req.body.productName
    const product_size = req.body.productSize
    const product_qty = req.body.productQty
    const product_price = req.body.productPrice
    const product_desc = req.body.productDesc
    const product_img = req.body.productImg

    sql.query("UPDATE `realproduct` SET(`product_name`, `product_size`, `product_qty`, `product_price`, `product_desc`, `product_img`) VALUES(?, ?, ?, ?, ?, ?)", product_name, product_size, product_qty, product_price, product_desc, product_img, (err, result) => { // Prepared Statement
        if(err) throw err;

        if(result){
            res.json(result)
            console.log(result)
            // res.json({data: ['Hello', 'World']})
        }
    })
})








app.listen(PORT, () => console.log(`App running on port ${PORT}`))

// npm install express joi mysql concurrently