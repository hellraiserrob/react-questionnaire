import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { fetchQuestions } from '../actions/questionActions'
import Tooltip from '../components/common/Tooltip'
import Modal from '../components/common/Modal'

class StartContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchQuestions())
        document.title = 'Start'
    }

    render() {

        const { categories } = this.props

        return (
            <div>

                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>

                {categories.map((category) => {
                    return <div key={category.id} className="question">

                        <h5 className="question__number">
                            {category.id}
                        </h5>
                    
                        <h4 className="question__title">
                            {category.name} <Tooltip title={'Note'} text={category.description}>?</Tooltip>
                        </h4>
                    
                        <p className="question__copy">
                            {category.description}
                        </p>

                        <div className="mb20">
                            <Modal title={category.name} text={category.description}>Show Modal</Modal>
                        </div>

                        <hr />
                    </div>
                })}

                </ReactCSSTransitionGroup>



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