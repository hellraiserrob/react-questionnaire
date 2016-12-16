// import { connect } from 'react-redux';
// import { setAnswer, resetAnswers } from '../actions/answerActions'
// import { fetchQuestions } from '../actions/questionActions'

// import Questions from '../pages/Questions';

// function mapStateToProps(state) {

// 	return {
// 		categories: state.questionReducer.categories,
// 		isFetching: state.questionReducer.isFetching,
// 		isError: state.questionReducer.isError,
// 		answers: state.answerReducer.answers
// 	}
// }


// /**
//  * disptch = store.dispatch
//  */
// function mapDispatchToProps(dispatch) {
// 	return {
// 		handleSetAnswer(categoryId, questionId, answerId) {
// 			dispatch(setAnswer(categoryId, questionId, answerId))
// 		},
// 		handleResetAnswers(e) {
// 			e.preventDefault()
// 			dispatch(resetAnswers())
// 		},
// 		handleFetchQuestions() {
// 			dispatch(fetchQuestions())
// 		}
// 	}
// }


// const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Questions)

// export default QuestionContainer;






import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../actions/questionActions'
import { setAnswer, resetAnswers } from '../actions/answerActions'
import { Link } from 'react-router'

import Category from '../components/questions/Categories'
import Progress from '../components/questions/Progress'

class QuestionContainer extends Component  {

    // constructor(props){
    //     super(props)
    // }

    componentDidMount(){
        // const { dispatch } = this.props
        // dispatch(fetchQuestions())

		this.props.handleFetchQuestions()

        document.title = 'Questions'
        window.scrollTo(0, 0)
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

    render(){

        const { categories, handleSetAnswer, answers, isFetching, handleResetAnswers } = this.props
        const mappedCategories = this.mapCategories(categories, handleSetAnswer, answers)

        return (
            <div>
                {isFetching &&
                    <div className="loading">Loading...</div>
                }

                {mappedCategories}
                
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

function mapStateToProps(state) {

    const { categories, isFetching, isError } = state.questionReducer 
    const { answers } = state.answerReducer 

	return {
		categories,
		isFetching,
		isError,
		answers
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleSetAnswer(categoryId, questionId, answerId) {
			dispatch(setAnswer(categoryId, questionId, answerId))
		},
		handleResetAnswers(e) {
			e.preventDefault()
			dispatch(resetAnswers())
		},
		handleFetchQuestions() {
			dispatch(fetchQuestions())
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer)