var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

app.set('view engine', 'ejs')
app.set('views' , path.join(__dirname,'views'))

app.get('/',function(req, res){
    res.render('index',{
        message:'Hello',
        title:'Express'
    }) 
})


app.listen(3000, function(){
    console.log('Server Started on port 3000 ...')
})
