import express from 'express'
import path from 'path';
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// url params:
// http://localhost:5001/weather/karachi/75600
// app.get('/weather/:cityName/:zip', (req, res) => {


// query parameters:
// http://localhost:5001/weather?zip=75600&city=karachi
// app.get('/weather', (req, res) => {
//       console.log(req.query.city)
//       console.log(req.query.zip)

// body:
// http://localhost:5001/weather
// {
//   cityName: "karachi",
//   zip: 75600
// }

// app.use(express.json());
// app.get('/weather', (req, res) => {
//       console.log(req.body.cityName)
//       console.log(req.body.zip)
//
// parsing body is must on server


app.get('/weather/:cityName', (req, res) => {
  console.log("request ip: ", req.ip);
  console.log("param: ", req.params.cityName);

  
  res.send({
      city: req.params.cityName,
      temp: 30,
      min: 26,
      max: 31,
      humidity: 72,
      serverTime: new Date().toString()
  });
})
// app.get('/', (req, res) => {
//     console.log('requsret come from:' + new Date().toString())
//   res.send('Respone From Anas Raza!')
// })


const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})