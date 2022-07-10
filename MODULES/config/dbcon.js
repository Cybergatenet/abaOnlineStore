const mySQL = require('mysql')
// const dotenv = require('dotenv')
// dotenv.config()

const dbcon = mySQL.createConnection({
    // host: process.env.HOST || "localhost",
    // user: process.env.USER || "root",
    // password: process.env.PASSWORD || "123456",
    // database: process.env.DB_NAME || "naprimastore"

    host: 'localhost',
    user: 'root',
    database: 'naprimastore'


    // HOST=localhost
    // USER=root
    // PASSWORD=2244
    // DB_NAME=naprimastore
})

dbcon.connect((err, response) => {
    if(err) throw err;

    console.log("DB connected")
})

module.exports = dbcon

// export default dbcon