import express from 'express'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'test'
})

app.get('/', (req,res) => {
    res.json('Hello from backend')
})

app.get('/books', (req,res) => {
    const q = 'SELECT * FROM books'
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(5000, () => {
    console.log("Server start")
})