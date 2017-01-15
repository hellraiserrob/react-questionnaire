var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('testing...')
})

app.listen(3001, function(){
    console.log('listening on port 3001....');
})