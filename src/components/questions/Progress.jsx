import React, { Component } from 'react'

class Progress extends Component {


    /**
     * Get total number of questions
     * @param categories {array}  
     * @returns total {number}  
     */
    getTotal(categories){
        
        let total = 0

        categories.forEach((category) => {
            category.questions.forEach(()=> {
                total +=1
            })
        })

        return total


    }

    getProgressStyle(answers, categories){

        return {
            width: this.getPercent(answers, categories) + '%'
        }

    }

    getPercent(answers, categories){

        return Math.round(answers.length / this.getTotal(categories) * 100)
    }

    // getLabelStyle(percent){

    //     return {
    //         left: percent + '%',
    //         display: percent === 0 ? 'none': 'block'
    //     }

    // }

    render(){

        const {answers, categories} = this.props

        //const percent = this.getPercent(answers, categories)
        //const labelStyle = this.getLabelStyle(percent)

        return (

            <div className="progress">
                <div className="progress__bar" style={this.getProgressStyle(answers, categories)}></div>
                {/*<div className="progress__label" style={labelStyle}>{percent}%</div>*/}
            </div>

        )
    }
}



export default Progress