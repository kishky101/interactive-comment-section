import { combineReducers } from "@reduxjs/toolkit";
import { CommentReducer } from "./reducer";

export const rootReducer = combineReducers({
    commentReducer: CommentReducer
})