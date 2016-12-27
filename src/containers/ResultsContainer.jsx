import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../actions/questionActions'

import Categories from '../components/results/Categories'
import Share from '../components/results/Share'

import { Link } from 'react-router'
import Flasher from '../components/common/Flasher'

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
            <div className="ptlg">

                {isFetching &&
                    <div className="loading">loading</div>
                }

                <div className="mb50">
                    <h2 className="mb30">
                        Like your results, <Link to="/questions">No<Flasher delay={0} duration={500}>.</Flasher></Link>
                    </h2>
                    <hr/>
                </div>

                {/*<Share answers={answers} />*/}

                <Categories
                    categories={categories}
                    answers={answers}
                 />

                {/* 
                <footer>
                    <Link className="btn btn--block btn--submit" to="/questions">Back</Link>
                </footer>
                */}
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