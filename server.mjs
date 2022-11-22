import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('requsret come from:' + new Date().toString())
  res.send('Respone From Anas Raza:'+ req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})