import { connect } from 'react-redux';
import { setAnswer, resetAnswers } from '../actions/answerActions'
import { fetchQuestions } from '../actions/questionActions'

import Questions from '../pages/Questions';

function mapStateToProps(state) {

	return {
		categories: state.questionReducer.categories,
		isFetching: state.questionReducer.isFetching,
		isError: state.questionReducer.isError,
		answers: state.answerReducer.answers
	}
}


/**
 * disptch = store.dispatch
 */
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


const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Questions)

export default QuestionContainer;