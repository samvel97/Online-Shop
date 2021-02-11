import { combineReducers } from "redux";
import cards from './cardReducers'
const allReducer = combineReducers({
  cards
})

export default allReducer;