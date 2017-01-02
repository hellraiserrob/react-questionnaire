import React from 'react'
import Question from './Question'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Category = ({id, name, description, questions, handleSetAnswer, answered}) => (
    <div>

        {/*<div className="category">
            <h3 className="category__title">{name}</h3>
            <p className="category__copy">{description}</p>
            <hr />
        </div>*/}

        <h4 className="mb50 highlight"><span>{name}</span></h4>

        
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>

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

        </ReactCSSTransitionGroup>

    

    </div>
)

export default Category