// import React, { Component } from 'react';
// import AnswersList from '../answers/AnswerList';

// class Question extends Component {

//     constructor(props) {
//         super(props);

//         this.answers = props.answers;

//     }

//     render() {

//         return (
//             <li key={this.props.index}>
//                 {this.props.title} {this.props.answerIndex}
//                 <AnswersList
//                     setAnswer={this.props.setAnswer} 
//                     questionIndex={this.props.index}
//                     answers={this.props.answers} />
//             </li>
//         )

//     }
// }

// export default Question;


// import React, { Component } from 'react'
// import Answer from './Answer'

// class Question  extends Component {

//     constructor(props){
//         super(props)
//     }

//     render(){

//         const { id, title, description, answers, handleSetAnswer, categoryId, questions } = this.props

//         const answerList = answers.map((answer) => 
//             <Answer 
//                 key={answer.id}
//                 questionId={id}
//                 handleSetAnswer={handleSetAnswer}
//                 categoryId={categoryId}
//                 checked={checked}
//                 {...answer}
//             />
//         )

//         return (
//             <div>
//                 <h4>{title}</h4>
//                 <p>{description}</p>
//                 <ul className="answers">
//                     {answerList}
//                 </ul>
//             </div>
//         )
//     }

// }

// export default Question



// let Question = ({ id, title, description, handleSetAnswer, answers, answered, categoryId, questions }) => (

//     <div>
//         <h4>{title}</h4>
//         <p>
//             {description}
//         </p>

//         {/*answered.map((answer) => {
//             if(id === answer.questionId){
//                 return `you have answers this with ${answer.answerId}`
//             }
//             return false
//         })*/}

//         <ul className="answers">
//             {answers.map((answer) => 
//                 <Answer 
//                     key={answer.id}
//                     handleSetAnswer={handleSetAnswer}
//                     questionId={id}
//                     categoryId={categoryId}
//                     answered={answered}
//                     questions={questions}
//                     {...answer}
//                 />
//             )}
//         </ul>



//     </div>

// )

// export default Question







import React, { Component } from 'react'
import Answer from './Answer'

//import './slider.css';
//import Slider from 'rc-slider'

class Question extends Component {

    constructor(props) {
        super(props)
        this.getSelected = this.getSelected.bind(this)
    }


    getSelected(id, categoryId, answered, answers) {

        let result = null

        answered.forEach((answer) => {
            if (categoryId === answer.categoryId && id === answer.questionId) {
                answers.forEach((ans) => {
                    if (ans.id === answer.answerId) {
                        result = answer.answerId
                    }
                });
            }
        })

        return result

    }

    // getMarks(answers) {

    //     return answers.reduce(function (o, v, i) {
    //         o[i+1] = v.title;
    //         return o;
    //     }, {});

    // }

    render() {

        const { id, title, description, handleSetAnswer, answers, answered, categoryId, questions } = this.props
        
        //const result = this.getSelected(id, categoryId, answered, answers)
        
        // const style = { 
        //     margin: '50px auto'
        // };
        // const marks = this.getMarks(answers)

        return (
            <div>
                    
                <h5 className="mb10 text-normal">{id} / {title}</h5>
                <p className="">
                    {description}
                </p>
                    
                <div className="answers">
                    {answers.map((answer) =>
                        <Answer
                            key={answer.id}
                            handleSetAnswer={handleSetAnswer}
                            questionId={id}
                            categoryId={categoryId}
                            answered={answered}
                            questions={questions}
                            {...answer}
                            />
                    )}
                </div>

                { /*<div style={style}>
                    <Slider tipFormatter={null}
                        min={1}
                        max={answers.length}
                        marks={marks}
                        step={1}
                        onChange={(value) => handleSetAnswer(categoryId, id, value)}
                        value={result}
                        />
                </div> */ }

            </div>
        )
    }
}

export default Question

