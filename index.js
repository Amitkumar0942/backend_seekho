const express = require('express')
require('dotenv').config()

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(
    '/instagram', (req, res)=> {
        res.send('Hello Instagram!')
    }
)

app.get('/login', (req, res) =>{
    res.send('<h1>please login at backend seekho</h1>')
})


app.listen(console.log(process.env), () => {
  console.log(`Example app listening on port ${port}`)
})

