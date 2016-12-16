import React from 'react'
import Question from './Question'
import Progress from './Progress'
import { Link } from 'react-router'

let QuestionList = ({ questions, answers, handleSetAnswer }) => (

    <div>

        <h1>Questions</h1>
        
        {questions.map((question, index) => {
            return <Question
                        key={question.id}
                        handleSetAnswer={handleSetAnswer}
                        answered={answers}
                        {...question}
                    />
        })}

        {<Progress questions={questions} />}

        <ul>
            {answers.map((answer, index) => {
                return <li key={index}>{answer.questionId} ... {answer.answerId}</li>
            })}
        </ul>


        <Link to="/results">Finish</Link>




    </div>

)

export default QuestionList