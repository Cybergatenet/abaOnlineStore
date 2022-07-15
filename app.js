const express = require("express")
const PATH = require("path")
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const app = express()
const JOI = require('joi')
const UUID = require('uuid')
const BCRYPT = require('bcrypt')
const session = require('express-session')

// Creating User session
// const sessionID = UUID()
// app.use(session({
//     secret: sessionID,
//     resave: false,
    
// }))

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
app.post('/api/create/product/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // REST-API - Respresentative state transfer Pattern/protocol 
    
    let product_name = req.body.productName
    let product_size = req.body.productSize
    let product_qty = req.body.productQty
    let product_price = req.body.productPrice
    let product_desc = req.body.productDesc
    let product_img = req.body.productImg
    let product_cat = req.body.productCat


    sql.query("INSERT INTO `realproduct`(`product_id`,`product_name`, `product_size`, `product_qty`, `product_price`, `product_desc`, `product_img`, `product_cat`) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", NULL, product_name, product_size, product_qty, product_price, product_desc, product_img, product_cat, (err, result) => { // Prepared Statement
        if(err) throw err;

        if(result){
            res.json(result)
            console.log(result)
            // res.json({data: ['Hello', 'World']})
        }
    })

})

//  Edit Product
app.post('/api/edit/product/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const id = req.params.id

    const product_name = req.body.productName
    const product_size = req.body.productSize
    const product_qty = req.body.productQty
    const product_price = req.body.productPrice
    const product_desc = req.body.productDesc
    const product_img = req.body.productImg
    const product_cat = req.body.productCat

    sql.query("UPDATE `realproduct` SET `product_name` = ?, `product_size` = ?, `product_quantity` = ?, `product_price` = ?, `product_desc` = ?, `product_img` = ?, `product_cat` = ? WHERE `realproduct`.`product_id` = '"+id+"';", product_name, product_size, product_qty, product_price, product_desc, product_img, product_cat, (err, result) => { // Prepared Statement
        if(err) throw err;

        if(result){
            res.json(result)
            console.log(result)
            // res.json({data: ['Hello', 'World']})
        }
    })
})

// Delete 
app.post('/api/delete/product/:id', (req, res) => {
    const id = req.params.id

    sql.query("DELETE FROM `realproduct` WHERE `product_id`=?", id, (err, result) => {
        if(err) throw err;

        if(result){
            res.json(result)
            console.log(result)
            // res.json({data: ['Hello', 'World']})
        }
    })
})


// Admin Login
app.post('/api/admin/login', (req, res) => {
    const username = req.body.username
    const pwd = req.body.pwd

    sql.query("SELECT * FROM `admin` WHERE `username`=?", username, (err, result) =>{
        if(err) throw err;

        if(result.length > 0){
            BCRYPT.compare(pwd, result[0].pwd, (err, response) => {
                if(err) throw err;
                if(response){
                    // Password Matched
                    // Create Session
                    req.session.user = result
                }else{
                    // Password Dismatched
                    res.json({data: "Username or Password is Incorrect. Try Again"})
                }
            })
        }else{
            res.json({data: "User Does not exist"})
        }
    })

})

// GENERATING ADMIN PASSWORD 

// const saltRounds = 10;
// const myPlaintextPassword = '123456';

// (async () => {
//     // Technique 1 (generate a salt and hash on separate function calls):
//     const salt = await BCRYPT.genSalt(saltRounds);
//     const hash = await BCRYPT.hash(myPlaintextPassword, salt);

//     console.log(hash)
// })();


app.listen(PORT, () => console.log(`App running on port ${PORT}`))

// npm install express joi mysql concurrently