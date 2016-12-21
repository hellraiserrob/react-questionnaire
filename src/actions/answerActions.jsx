import { SET_ANSWER, SET_ANSWERS, RESET_ANSWERS } from '../constants/answerTypes'

export function setAnswer(categoryId, questionId, answerId){
    return {
        type: SET_ANSWER,
        payload: {
            categoryId,
            questionId,
            answerId
        }
    }
}

export function setAnswers(answers){
    return {
        type: SET_ANSWERS,
        payload: {
            answers
        }
    }
}


export function resetAnswers(){
    return {
        type: RESET_ANSWERS
    }
}

