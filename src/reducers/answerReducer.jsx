import { SET_ANSWER, RESET_ANSWERS } from '../constants/answerTypes.js'

const initialState = {
    answers: []
}

function answerReducer(state = initialState, action){

    switch(action.type){

        case SET_ANSWER: {

            let { categoryId, questionId, answerId} = action.payload;
            
            let exists = false;

            let existingAnswer = state.answers.filter((answer) => {
                
                if(categoryId === answer.categoryId && questionId === answer.questionId){
                    exists = true
                    answer.answerId = answerId
                    return answer
                }
                return answer
                
            })

            if(exists){
                return {...state, answers: existingAnswer}
            }
            
            return {...state, answers: [...state.answers, {
                categoryId,
                questionId,
                answerId
            }]};
            
        }

        case RESET_ANSWERS: {
            return {...state, answers: []}
        }

        default: {
            return state;
        }
    }

    

}

export default answerReducer;