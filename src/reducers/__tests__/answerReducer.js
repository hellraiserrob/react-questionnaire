import answerReducer from '../answerReducer.jsx'
import { setAnswer } from '../../actions/answerActions.jsx' 

describe('Questions Reducer', () => {

    it('should return an initial state', () => {

        let initialState = {
            answers: []
        }

        expect(answerReducer(initialState, {})).toEqual(initialState)
        

    })
    
    // it('should set an answer', () => {

    //     let initialState = {
    //         questions: []
    //     }

    //     let categoryId = 1
    //     let questionId = 2
    //     let answerId = 3

    //     let action = setAnswer(categoryId, questionId, answerId)

    //     expect(answerReducer(initialState, action).answersReducer.answers[0].answerId).toEqual(answerId)

    // })

    
})

