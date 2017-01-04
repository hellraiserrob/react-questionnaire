import React, { Component } from 'react'
import { Link } from 'react-router'

import { resetAnswers } from '../../actions/answerActions'

import { connect } from 'react-redux'

class Header extends Component {

    render() {
        return (
            <header>

                <div className="container">
                    <Link className="logo" to="/start">Q</Link>
                    {this.props.answers.length > 0 &&
                        <a href="#" onClick={this.props.handleResetAnswers} className="btn btn--clear ">clear</a>
                    }
                </div>

            </header>
        )
    }
}


function mapStateToProps(state) {

    const { answers } = state.answerReducer 

	return {
		answers
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleResetAnswers(e) {
			e.preventDefault()
			dispatch(resetAnswers())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
