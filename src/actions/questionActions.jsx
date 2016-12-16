
import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, RECEIVE_QUESTIONS_ERROR } from '../constants/questionTypes'

// export function setAnswer(questionIndex, answerIndex){
//     return {
//         type: SET_ANSWER,
//         payload: {
//             questionId,
//             answerId
//         }
//     }
// }


// function delay(duration) {
//     return function (...args) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve(...args)
//             }, duration)
//         })
//     }
// }

export function requestQuestions() {
    return {
        type: REQUEST_QUESTIONS
    }
}

export function receiveQuestions(response) {
    return {
        type: RECEIVE_QUESTIONS,
        payload: response,
        receivedAt: Date.now()
    }
}

export function receiveQuestionsError(response) {
    return {
        type: RECEIVE_QUESTIONS_ERROR,
        payload: response
    }
}

export function fetchQuestions() {
    return dispatch => {
        dispatch(requestQuestions())
        return fetch(`api/questions.json`)
            .then(response => response.json())
            .then(response => dispatch(receiveQuestions(response)))
            .catch(response => dispatch(receiveQuestionsError(response)))
    }
}

