const mysql = require('mysql2')
const data = require('./data/todos')
const express = require ('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'ap1234',
    database: 'project'
})

// connection.query(
//     `INSERT INTO project.todos (${Object.keys(data[0])}) values ?`, [data.map((item, i)=> Object.values(item))], (err, results, fields) => {
//         console.log(results);
//         console.log(err);
//     }
// )  

app.post('/users',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    connection.query(`SELECT * FROM users WHERE username = (?) 
    AND password = (?)`,[username,password],(err,results,fields)=>{
        if(err)
       res.send(err.message)
       else if(results.length){
        res.send(results)
       }
    //    console.log(fields);
    })
})

app.listen(5002)