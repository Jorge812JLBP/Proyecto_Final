const express = require('express');
var cors=require('cors');
//var bodyParser = require('body-parser');
const app = express()
app.use(cors());
var port = process.env.PORT || 8120 //localhost:8120
var router=require('./routes')
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/ventas',router);

app.listen(port);