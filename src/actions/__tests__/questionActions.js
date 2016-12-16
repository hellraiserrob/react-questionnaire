import { setAnswer } from '../questionActions.jsx'
import { GET_QUESTIONS, SET_ANSWER } from '../../constants/questionTypes'


describe('actions', () => {

    it('should create an action to set an answer', () => {
        
        const expectedAction = {
            
            type: SET_ANSWER,

            payload: {
                questionIndex: 0,
                answerIndex: 0
            }

        }

        expect(setAnswer(0, 0)).toEqual(expectedAction)
    })

})