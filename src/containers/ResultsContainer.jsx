import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../actions/questionActions'
import Categories from '../components/results/Categories'

import { Link } from 'react-router'

class ResultsContainer extends Component  {

    // constructor(props){
    //     super(props)
    // }

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(fetchQuestions())

        document.title = 'Results'
        window.scrollTo(0, 0);
    }

    render(){

        const { categories, isFetching, answers } = this.props

        return (
            <div>

                {isFetching &&
                    <div className="loading">loading</div>
                }

                <Categories
                    categories={categories}
                    answers={answers}
                 />
                 
                <footer>
                    <Link className="btn btn--block btn--submit" to="/questions">Back</Link>
                </footer>
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


export default connect(mapStateToProps)(ResultsContainer)