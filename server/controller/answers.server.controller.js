const Answers = require('../models/answers.server.model')


const create = (req, res) => {

    let entry = new Answers({
        answerName: 'John Smith',
        _quiz: '588873e92891d512dc26cb34',
        answers: [{
            _question: '588873e92891d512dc26cb35',
            _answer: '588873e92891d512dc26cb37'
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


const getById = (req, res) => {


    let id = req.params.id

    Answers.findById(id)
        .populate('_quiz')
        .then((err, response) => {

            if (err) {
                res.send(err)
            }

            res.send(response)
        })
}


module.exports = {
    create,
    getById
}