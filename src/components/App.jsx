import React from 'react';
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './App.css'


//import QuestionContainer from '../containers/questions/QuestionContainer';

const App = ({children}) => (
	<div className="app">
		<header>
			<div className="logo">
				q
			</div>

			<h1>questionnaire</h1>
			<p>
				A small questionnaire app. <Link to="/start">Home</Link>
			</p>
			<hr />
		</header>

		<ReactCSSTransitionGroup
			component="div"
			transitionName="page"
			transitionEnterTimeout={300}
			transitionLeaveTimeout={500}
			>
			{React.cloneElement(children, {
				key: location.pathname
			})}
		</ReactCSSTransitionGroup>


		
	</div>
)

export default App;