const express = require('express')
const ejs= require('ejs')
const app = express()
const fs = require('fs')
app.engine('html', ejs.renderFile)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.use(express.json())


let quotes = JSON.parse(fs.readFileSync('public/quotes.json', 'utf-8'))

app.get('/', (req,res) => {
    res.render("index.html")
})

app.get('/quotes', (req,res) => {
    let string = ''
    quotes.quotes.forEach(function (quote) {
        console.log(quote)
        string = string + quote + " "
    })
    res.send(string)
})



app.listen(3023)