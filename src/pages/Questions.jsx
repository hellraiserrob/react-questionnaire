import React, { Component } from 'react'
import { Link } from 'react-router'

import Category from '../components/questions/Categories'
import Progress from '../components/questions/Progress'

class Questions extends Component {

    
    componentDidMount() {
        document.title = 'Questions'
        this.props.handleFetchQuestions()

        window.scrollTo(0, 0);

    }

    mapCategories(categories, handleSetAnswer, answers) {
        return categories.map((category) =>
            <Category
                key={category.id}
                handleSetAnswer={handleSetAnswer}
                answered={answers}
                {...category}
                />
        )
    }

    render() {

        const { categories, handleSetAnswer, answers, isFetching, handleResetAnswers } = this.props
        const cats = this.mapCategories(categories, handleSetAnswer, answers)

        // const answered = answers.map((answer, index) => {
        //     return <p key={index}>{answer.categoryId} {answer.questionId} {answer.answerId}</p>
        // })

        return (
            <div>

                


                {isFetching &&
                    <div className="loading">Loading...</div>
                }


                {cats}


                
                <footer>
                    <Progress answers={answers} categories={categories} />
                    <Link className="btn btn--block btn--submit" to="/results">Next...</Link>
                </footer>
                
                {answers.length > 0 &&
                    <a className="btn btn--naked" href="#" onClick={(e) => handleResetAnswers(e)}>Reset</a>
                }

            </div>
        )
    }

}

export default Questions





// let Questions = ({categories, answers, handleSetAnswer, handleResetAnswers, handleFetchQuestions, isFetching, isError}) => (


//     <div>

//         {
//             document.title = 'Questions'
//         }

//         

//         {isError &&
//             <div>I AM erroring</div>
//         }

//         <p>
//             <a onClick={handleResetAnswers}>Reset Answers</a>
//         </p>

//         <p>
//             <a onClick={handleFetchQuestions}>Fetch question</a>
//         </p>

//         <h2>
//             Questions
//         </h2>

//         {categories.map((category) => 
//             <Category
//                 key={category.id}
//                 handleSetAnswer={handleSetAnswer}
//                 answered={answers}
//                 {...category}
//              />
//         )}



//         {answers.map((answer, index) => {
//             return <p key={index}>{answer.categoryId} {answer.questionId} {answer.answerId}</p>
//         })}


//         <Link to="/results">Finish</Link>

//     </div>
// )

// export default Questions