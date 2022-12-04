const mysql = require('mysql2')
const data = require('./data/todos')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'ap1234',
    database: 'project'
})
console.log(data.map((item, i)=> Object.values(item)));
connection.query(
    `INSERT INTO project.todos (${Object.keys(data[0])}) values ?`, [data.map((item, i)=> Object.values(item))], (err, results, fields) => {
        console.log(results);
        console.log(err);
    }
)  