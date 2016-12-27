import React, { Component } from 'react';

class Numbers extends Component {

    getProgress(categoryId, answers, questions) {

        let total = 0

        answers.forEach((answer) => {
            questions.forEach((question) => {
                if (answer.questionId === question.id && categoryId === answer.categoryId) {
                    total += 1
                }
            })
        })

        return total

    }


    getScore(categoryId, answers, questions) {

        let total = 0
        let possible = 0

        questions.forEach((question) => {

            let max = 0

            question.answers.forEach((option) => {
                
                if (option.value > max) {
                    max = option.value
                }
                
                answers.forEach((answer) => {
                    if (answer.questionId === question.id && categoryId === answer.categoryId && answer.answerId === option.id) {
                        total += option.value
                    }
                })
            })

            possible += max
        })

        return {
            total: total,
            possible: possible
        }
    }

    render() {

        const { categoryId, questions, answers } = this.props

        const total = this.getScore(categoryId, answers, questions).total
        const possible = this.getScore(categoryId, answers, questions).possible

        

        return (
            <div className="scores">

                <h2>
                    {this.getProgress(categoryId, answers, questions)}{questions.length}%
                </h2>

                <h2>
                    {total}{possible}%
                </h2>
                
            </div>
        )
    }
}

export default Numbers