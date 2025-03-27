const express = require('express')
// import express from 'express

const app = express()
const port = 4000

app.get('/', (req, res) => { // get request, call back , if req then res hello world 
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => { // get request
    res.send('Milanlamsal.twitter')
})
app.get('/login', (req, res) => {
    res.send(`<h1>Welcome to Loging </h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})