import { combineReducers } from "redux";
import { postsLikeReducer } from './postsLikeReducer'


export const rootReducer = combineReducers({
    postsLikeState: postsLikeReducer,
})