const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    categoryTitle: String
})


let Category = mongoose.model('Quiz', categorySchema)

module.exports = Category
