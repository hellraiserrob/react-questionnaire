const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    categoryTitle: String
})

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
    quizQuestions: [questionSchema],
    quizCategories: [categorySchema]
})

// const questionnaireSchema = new Schema({
//     quizes: quizSchema,
//     questions: questions
// })


//model from schema
let Quiz = mongoose.model('Quiz', quizSchema, 'Quiz')

module.exports = Quiz


// let quiz1 = new Quiz({
//     quizTitle: 'Test 1',
//     quizQuestions: [{
//         questionTitle: 'Question 1',
//         questionAnswers: [{
//             answerTitle: 'Answer 1',
//             answerScore: 1
//         }]
//     }],
//     quizCategories: [{
//         categoryTitle: 'Sports'
//     }]
// })

// quiz1.save(cb)