import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchQuestions } from '../actions/questionActions'

class StartContainer extends Component  {

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(fetchQuestions())
        document.title = 'Start'
    }

    render(){

        const { categories } = this.props

        return (
            <div>
            
                {categories.map((category)=>{
                    return <div key={category.id} className="question">
                            <h5 className="question__number">{category.id}</h5>
                            <h4 className="question__title">{category.name}</h4>
                            <p className="question__copy">
                                {category.description}
                            </p>
                            
                            <hr />
                        </div> 
                })}

                

                

                <footer>
                    <Link className="btn btn--block btn--submit" to="/questions">Start</Link>
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


export default connect(mapStateToProps)(StartContainer)