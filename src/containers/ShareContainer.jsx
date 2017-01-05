import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router';

import Flasher from '../components/common/Flasher'

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
            <div className="ptlg">

                <h2 className="mb30">
                    Hey, someone sent you their answers<Flasher delay={0} duration={500}>.</Flasher>
                </h2>

                <p>
                    <button className="btn btn--submit" onClick={this.set}>OK</button>
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