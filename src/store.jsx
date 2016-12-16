import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'
import { loadAnswers } from './libs/localStorage'

// import createLogger from 'redux-logger'
//const loggerMiddleware = createLogger()

const persistedAnswers = {
	answerReducer: {
		answers: loadAnswers()
	}
}

function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
      //loggerMiddleware
    )
  )
}

const store = configureStore(persistedAnswers)
export default store