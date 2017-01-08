import React, {Component} from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import './App.css'


class App extends Component {
	render(){

		const children = this.props.children

		return (

			<div>

				<Header />
				
				<div className="container">

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

				<Footer />


				
			</div>


		)
	}
}




//import QuestionContainer from '../containers/questions/QuestionContainer';

// const App = ({children}) => (
// 	<div>

// 		<Header />
		
// 		<div className="container">

// 			<ReactCSSTransitionGroup	
// 				transitionName="page"
// 				transitionAppear={true}
// 				transitionAppearTimeout={300}
// 				transitionEnterTimeout={300}
// 				transitionLeaveTimeout={500}
// 				>
// 				{React.cloneElement(children, {
// 					key: location.pathname
// 				})}
				
// 			</ReactCSSTransitionGroup>

// 		</div>

// 		<Footer />


		
// 	</div>
// )

export default App;