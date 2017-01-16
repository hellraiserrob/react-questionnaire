'use strict'

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const config = require('./config.js')
let db

MongoClient.connect(`mongodb://${config.username}:${config.pwd}@ds139278.mlab.com:39278/questionnaire`, (err, database) => {

    if(err){
        return console.log(err)
    }

    db = database

    app.listen(3001, function(){
        console.log('listening on 3001')
    })

})


app.get('/', function(req, res){
    db.collection('questions').find().toArray((err, results) => {
        res.send(results)
    })
})

app.get('/test', function(req, res){
    
    res.send({
        'status': 'ok'
    })
    
})

