// import React from 'react'

// let Answer = ({id, title, questionId, handleSetAnswer, categoryId, checked, answers, questions}) => (

//     <li className="answer__item">
//         <label>
//             <input  type="radio" name={`category${categoryId}-question-${questionId}`} onChange={() => handleSetAnswer(categoryId, questionId, id) } />
//             {title}  {checked}
//         </label>


//         { /*<button className="btn" onClick={() => handleSetAnswer(categoryId, questionId, id)}>
//             {title}
//         </button> */ }
//     </li>

// )

// Answer.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   questionId: React.PropTypes.number.isRequired
// };

// export default Answer


import React, { Component } from 'react'

class Answer extends Component {


    render() {

        const {id, title, value, questionId, handleSetAnswer, categoryId, answered} = this.props;
        
        let checked = ''
    
        answered.forEach((answer) => {

            if(id === answer.answerId && categoryId === answer.categoryId && questionId === answer.questionId){
                checked = 'checked'
            }

        })

        const link = `category${categoryId}-question-${questionId}-answer-${id}`

        return (

            <div className="answer__item">

                <input 
                    checked={checked}
                    type="radio"
                    id={link}
                    name={link}
                    onChange={() => handleSetAnswer(categoryId, questionId, id)}
                />
            
                <label htmlFor={link}>
                    {title}
                </label>

                <div className="answer__value">{value}</div>

            </div>

        )
    }

}

export default Answer