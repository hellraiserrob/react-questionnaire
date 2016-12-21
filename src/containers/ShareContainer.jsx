import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router';

import { setAnswers } from '../actions/answerActions'

class ShareContainer extends Component {
    
    constructor(props){

        super(props)
        this.set = this.set.bind(this)
    

    }

    componentDidMount() {
        document.title = 'Shared Answers'
    }


    set(){

        let { answers } = this.props.params
        this.props.handleSetAnswers(JSON.parse(answers))

        // Router.push({
        //     pathname: 'questions'
        // })

        hashHistory.push('/questions');



    }

    render() {

        

        return (
            <div className="share">

                <h1 className="share__title">Shared Answers</h1>
                
                <p>Someone shared their answers with you, click below to overwrite your own.</p>

                <p>
                    <button className="btn" onClick={this.set}>OK</button>
                </p>
                
                {/*<p>Currently, you have {answers.length} answers in state: </p>
                <p>
                    <button className="btn btn--naked" onClick={handleResetAnswers}>Clear</button>
                </p>*/ }

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
		handleSetAnswers(answers) {
			dispatch(setAnswers(answers))
		},
		// handleResetAnswers(e) {
		// 	e.preventDefault()
		// 	dispatch(resetAnswers())
		// },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ShareContainer)