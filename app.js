const express = require("express")
const PATH = require("path")
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const app = express()


// Import DB connection
const sql = require('./MODULES/config/dbcon')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



app.get('/api/products', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // REST-API
    sql.query("SELECT * FROM `realproduct`", (err, result) => {
        if(err) throw err;

        if(result){
            res.json(result)
            // console.log(result)
            // res.json({data: ['Hello', 'World']})
        }
    })
})



app.listen(PORT, () => console.log(`App running on port ${PORT}`))

// npm install express joi mysql concurrently