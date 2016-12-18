import React from 'react';
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import Tooltip from './common/Tooltip'

import './App.css'




//import QuestionContainer from '../containers/questions/QuestionContainer';

const App = ({children}) => (
	<div className="app">
		<header>
			<div className="logo">
				q
			</div>

			<h1>questionnaire</h1>
			<div className="mb20">
				A small <Tooltip title={'Note'} text={'This is a test'}>?</Tooltip> questionnaire app. <Link to="/start">Home</Link> 
			</div>
			<hr />
		</header>



		<ReactCSSTransitionGroup
			
			transitionName="page"
			transitionAppear={true}
            transitionAppearTimeout={300}
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