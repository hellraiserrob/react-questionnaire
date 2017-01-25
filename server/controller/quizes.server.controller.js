const Quiz = require('../models/quizes.server.model')


const create = (req, res) => {

    let entry = new Quiz({
        quizTitle: 'Test 1',
        quizQuestions: [{
            questionTitle: 'Question 1',
            questionAnswers: [{
                answerTitle: 'Answer 1',
                answerScore: 1
            },{
                answerTitle: 'Answer 2',
                answerScore: 2
            }]
        }]
    })

    entry.save().then((err) => {

        if (err) {
            res.send(err)
        }

        res.send({
            status: 'ok'
        })
    })
}

const getAll = (req, res) => {

    Quiz.find({}).then((err, response) => {

        if (err) {
            res.send(err)
        }

        res.send(response)
    })
}

const getById = (req, res) => {

    //58876e587ab30f26e03a6011
    //588776b8d9a25629b4d75979

    let id = req.params.id

    Quiz.findById(id).then((err, response) => {

        if (err) {
            res.send(err)
        }

        res.send(response)
    })
}


module.exports = {
    create,
    getAll,
    getById
}