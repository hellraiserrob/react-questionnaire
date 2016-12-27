import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {

    render() {
        return (
            <header>

                <div className="container">

                    <Link className="logo" to="/start">
                        Q
				</Link>

                </div>

                {/*<div className="mb20">
				A small questionnaire app. <Link to="/start">Home</Link> 
			</div>
			<hr />
			*/}

            </header>
        )
    }
}

export default Header
