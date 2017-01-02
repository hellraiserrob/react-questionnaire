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
import Flasher from '../components/common/Flasher'

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
            <div className="ptlg">
                {isFetching &&
                    <div className="loading">Loading...</div>
                }

                <h2 className="mb100">
                    Now answer the damn questions<Flasher delay={0} duration={500}>.</Flasher>
                </h2>

                {mappedCategories}
                
                <div className="sticky-bottom clearfix">
                    
                    {/*<Progress answers={answers} categories={categories} />*/}

                    <div className="row text-right">
                        <div className="col-6">
                            {/*answers.length > 0 &&
                                <a className="btn btn--block" href="#" onClick={(e) => handleResetAnswers(e)}>Reset</a>
                            */}
                        </div>
                        <div className="col-12">
                            <Link className="btn" to="/">back</Link>
                            <Link className="btn btn--submit" to="/results">next</Link>
                        </div>
                    </div>


                </div>
                
                
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