import { createSlice } from "@reduxjs/toolkit";
import { MockDataType } from "@/mock-comment-data";


const addComment = (comments: MockDataType[], comment: MockDataType): MockDataType[] => {
    return [...comments, comment]
}

const deleteComment = (comments: MockDataType[], comment: MockDataType): MockDataType[] => {
    return [...comments].filter(commentobj => commentobj.id !== comment.id)
}

const updateComment = (comments: MockDataType[], text: string, commentId: number): MockDataType[] => {
    return [...comments].map(comment => {
        if (comment.id === commentId) {
            return {...comment, comment: text}
        }else {
            return comment
        }
    })
}

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

export const commentSlice = createSlice({
    name: 'comments',
    initialState: INITIAL_STATE,
    reducers: {
        setComments(state, action) {
            state.comments = action.payload
        },
        // addNewComment: {
        //     reducer: (state, action: PayloadAction<MockDataType>) => {
        //         state.comments = addComment(state.comments, action.payload)
        //     },
        //     prepare: () => {
        //         return {payload: ''}
        //     }
        // },
        addNewComment(state, action) {
            state.comments = addComment(state.comments, action.payload)
        },
        // addNewComment(state, action) {
        //     state.comments.push(action.payload)
        // },
        removeComment(state, action) {
            state.comments = deleteComment(state.comments, action.payload)
        },
        editComment(state, action) {
            state.comments = updateComment(state.comments, action.payload.text, action.payload.id)
        },
        likedByUser(state, action) {
            state.userLike = action.payload
        },
        setCurrentUser(state, action) {
            state.user = action.payload
        },
        setSortMode(state, action) {
            state.commentSort = action.payload
        }
    }
})

export const CommentReducer = commentSlice.reducer;

export const {addNewComment, removeComment,editComment, likedByUser, setComments, setCurrentUser, setSortMode} = commentSlice.actions;
