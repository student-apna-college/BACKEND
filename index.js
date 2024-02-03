require('dotenv').config()
const { config } = require('dotenv')
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
        res.send('dev rawat')
})

app.get('/home', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>welcome to youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})