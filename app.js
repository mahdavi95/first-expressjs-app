var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()


app.get('/',function(req, res){
    res.send('Hello My Express App ;))')
})

app.listen(3000, function(){
    console.log('Server Started on port 3000 ...')
})
