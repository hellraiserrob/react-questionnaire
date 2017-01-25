const mongoose = require('mongoose')
const Schema = mongoose.Schema


// const categorySchema = new Schema({
//     categoryTitle: String
// })

const answerSchema = new Schema({
    answerTitle: String,
    answerScore: Number
})

const questionSchema = new Schema({
    questionTitle: String,
    questionAnswers: [answerSchema]
})

const quizSchema = new Schema({
    quizTitle: String,
    quizQuestions: [questionSchema]
})

// const questionnaireSchema = new Schema({
//     quizes: quizSchema,
//     questions: questions
// })


//model from schema
let Quiz = mongoose.model('Quiz', quizSchema)

module.exports = Quiz
