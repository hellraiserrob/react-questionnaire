import { SET_ANSWER, RESET_ANSWERS } from '../constants/answerTypes'

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


export function resetAnswers(){
    return {
        type: RESET_ANSWERS
    }
}

