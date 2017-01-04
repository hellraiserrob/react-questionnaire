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

            
                <div className="clearfix mb30">
                    <Categories
                        categories={categories}
                        answers={answers}
                    />
                 </div>

                <div className="sticky-bottom clearfix">

                    <div className="row text-right">
                        <div className="col-6">
                            {/*answers.length > 0 &&
                                <a className="btn btn--block" href="#" onClick={(e) => handleResetAnswers(e)}>Reset</a>
                            */}
                        </div>
                        <div className="col-12">
                            <Link className="btn" to="/questions">back</Link>
                            {/*<Link className="btn btn--submit" to="/results">share</Link>*/}
                            <Share answers={answers} />
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


export default connect(mapStateToProps)(ResultsContainer)