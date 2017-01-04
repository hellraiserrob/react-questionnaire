import React, { Component } from 'react';

import Flasher from '../common/Flasher'

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
            possible: possible,
            percent: this.getPercent(total, possible)
        }
    }

    getPercent(total, possible){
        return Math.round(total / possible * 100)
    }

    getStyle(percent){

        const color = (percent >= 50) ? 'text-green': 'text-red'

        return color
    }

    render() {

        const { categoryId, questions, answers } = this.props

        // const total = this.getScore(categoryId, answers, questions).total
        // const possible = this.getScore(categoryId, answers, questions).possible
        const percent = this.getScore(categoryId, answers, questions).percent

        const style = this.getStyle(percent)

        return (
            <div className="scores">

                {percent === 0 &&
                    <Flasher duration={1000} delay={0}>
                        <h3 className={style}>
                            {percent}%
                        </h3>
                    </Flasher>
                }
                
                {percent > 0 &&
                    <h3 className={style}>
                        {percent}%
                    </h3>
                }
                
                
            </div>
        )
    }
}

export default Numbers