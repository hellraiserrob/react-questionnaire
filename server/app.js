'use strict'

const express = require('express')
const app = express()

//const MongoClient = require('mongodb').MongoClient
//const ObjectID = new require('mongodb').ObjectID
const config = require('./config.js')
//let db

const mongoose = require('mongoose')
const QuizCtrl = require('./controller/questionnaire.server.controller')

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${config.username}:${config.pwd}@ds139278.mlab.com:39278/questionnaire`, (err) => {

    if (err) {
        console.log('error: There was an error connecting')
        return console.log(err)
    }

    app.listen(3001, function () {
        console.log('listening on 3001')
    })

})

app.get('/', (req, res) => {
    QuizCtrl.getAll(req, res)
})

app.get('/quiz/:id', (req, res) => {
    QuizCtrl.getById(req, res)
})


app.post('/save', (req, res) => {
    QuizCtrl.create(req, res)
})





// mongoose.connect(`mongodb://${config.username}:${config.pwd}@ds139278.mlab.com:39278/questionnaire`, (err, database) => {

//     if (err) {
//         return console.log(err)
//     }

//     console.log(database)

//     db = database

//     app.listen(3001, function () {
//         console.log('listening on 3001')
//     })

// })

// app.get('/quiz/:id', function (req, res) {

//     //quiz1: 587de79d734d1d5b7d4641cb
//     //quiz1: 587deea4734d1d5b7d464655

//     let id = ObjectID(req.params.id)

//     db.collection('quiz').findOne({ _id: id }, (err, quiz) => {

//         if (err) {
//             return console.log(err)
//         }


//         let ids = []

//         quiz.questions.forEach(item => {
//             ids.push(ObjectID(item))
//         });

//         db.collection('questions').find({
//             _id: { $in: ids }
//         }).toArray((err, questions) => {

//             quiz.question_details = questions

//             res.send(quiz)
//         })

//     })
// })

// app.get('/questions', function (req, res) {
//     db.collection('questions').find().toArray((err, results) => {
//         res.send(results)
//     })
// })

// app.post('/save', (req, res) => {


//     let body = {
//         _quiz_id: '587de79d734d1d5b7d4641cb',
//         name: "Jane Smith",
//         answers: []

//     }

//     db.collection('result').insert(body, (err, result) => {
//         if (err) return console.log(err)
//         console.log('saved to database')
//         console.log(result)
//         res.send(result)

//     })


// })