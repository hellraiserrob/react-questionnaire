import React, { Component } from 'react';
import Dial from './Dial'


class Scores extends Component {

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

                <Dial title={'Answered'} total={this.getProgress(categoryId, answers, questions)} possible={questions.length} />

                <Dial title={'Accuracy'} total={total} possible={possible} />
                {/* 
                    <p className="scores__summary">You have answered {this.getProgress(categoryId, answers, questions)} out of {questions.length} in this category with {total} out of {possible}</p>
                */}
            </div>
        )
    }
}

export default Scores