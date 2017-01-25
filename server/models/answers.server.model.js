const mongoose = require('mongoose')
const Schema = mongoose.Schema


const answerSchema = new Schema({
    _question: String,
    _answer: String

})

const answersSchema = new Schema({
    answerName: String,
    _quiz: { type: Schema.Types.ObjectId, ref: 'Quiz' },
    answers: [answerSchema]

})


let Answers = mongoose.model('Answers', answersSchema)

module.exports = Answers
