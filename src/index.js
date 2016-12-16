import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import { setAnswers } from './libs/localStorage'

store.subscribe(() => {
	const answers = store.getState().answerReducer.answers
	setAnswers(answers)
})

import { Router, hashHistory } from 'react-router';
import Routes from './routes'

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={Routes}>
		</Router>
	</Provider>,
	document.getElementById('root')
);