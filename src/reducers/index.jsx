import { combineReducers } from "redux"

import questionReducer from "./questionReducer"
import answerReducer from "./answerReducer"

let reducer = combineReducers({questionReducer, answerReducer})

export default reducer