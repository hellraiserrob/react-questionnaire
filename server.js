'use strict'

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const ObjectID = new require('mongodb').ObjectID
const config = require('./config.js')
let db

MongoClient.connect(`mongodb://${config.username}:${config.pwd}@ds139278.mlab.com:39278/questionnaire`, (err, database) => {

    if (err) {
        return console.log(err)
    }

    db = database

    app.listen(3001, function () {
        console.log('listening on 3001')
    })

})




app.get('/quiz/:id', function (req, res) {

    //quiz1: 587de79d734d1d5b7d4641cb
    //quiz1: 587deea4734d1d5b7d464655


    // $lookup:
    // {
    //     from: 'questions',
    //     localField: 'questions',
    //     foreignField: '_id',
    //     as: 'qustion_details'
    // }

    let id = ObjectID(req.params.id)

    db.collection('quiz').findOne({_id: id}, (err, quiz) => {

        if (err) {
            return console.log(err)
        }


        let ids = []

        quiz.questions.forEach(item => {
            ids.push(ObjectID(item))
        });

        db.collection('questions').find({
            _id: { $in: ids }
        }).toArray((err, questions) => {

            quiz.question_details = questions

            res.send(quiz)
        })

    })
})

app.get('/questions', function (req, res) {
    db.collection('questions').find().toArray((err, results) => {
        res.send(results)
    })
})

app.get('/test', function (req, res) {

    res.send({
        'status': 'ok'
    })

})

