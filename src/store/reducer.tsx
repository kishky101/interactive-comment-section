import { createSlice } from "@reduxjs/toolkit";
import { MockDataType } from "@/mock-comment-data";

export type CommentState = {
    readonly user: string;
    readonly userLike: boolean;
    readonly commentSort: string;
    readonly isLoading: boolean;
    readonly comments: MockDataType[];
}

const INITIAL_STATE: CommentState = {
    user: '',
    userLike: false,
    commentSort: '',
    isLoading: false,
    comments: []
}

const reducer = createSlice({
    name: 'comments',
    initialState: INITIAL_STATE,
    reducers: {}
})