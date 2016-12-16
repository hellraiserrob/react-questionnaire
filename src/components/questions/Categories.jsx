import React from 'react'
import Question from './Question'

const Category = ({id, name, description, questions, handleSetAnswer, answered}) => (
    <div>

        <div className="category">
            <h3 className="category__title">{name}</h3>
            <p className="category__copy">{description}</p>
            <hr />
        </div>

        {questions.map((question, index) => 
            <Question
                key={question.id}
                handleSetAnswer={handleSetAnswer}
                categoryId={id}
                questions={questions}
                answered={answered}
                {...question}
            />
        )}

    

    </div>
)

export default Category