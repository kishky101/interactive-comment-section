import { createSlice } from "@reduxjs/toolkit";
import { MockDataType } from "@/mock-comment-data";


const addComment = (comments: MockDataType[], comment: MockDataType): MockDataType[] => {
    return [ comment,...comments ]
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

const likeComment = (comments: MockDataType[], commentId: number) => {
    return [...comments].map(comment => {
        if (comment.id === commentId) {
            if (comment.liked === false) {
                return {...comment,likeCount: comment.likeCount + 1, liked: true }
            }else {
                return {...comment,likeCount: comment.likeCount - 1, liked: false }
            }
            
        }else {
            return comment
        }
    })
}

const sortWithBestComments = (comments: MockDataType[]) => {
    return [...comments].sort((a, b) => b.likeCount - a.likeCount)
}

const sortWithLatestComments = (comments: MockDataType[]) => {
    return [...comments]
}

export type CommentState = {
    readonly user: string;
    readonly commentSort: string;
    readonly isLoading: boolean;
    readonly comments: MockDataType[];
}

const INITIAL_STATE: CommentState = {
    user: '',
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
        addNewComment(state, action) {
            state.comments = addComment(state.comments, action.payload)
        },
        removeComment(state, action) {
            state.comments = deleteComment(state.comments, action.payload)
        },
        mostLikeCommentSort(state) {
            state.comments = sortWithBestComments(state.comments)
        },
        latestCommentSort(state) {
            state.comments = sortWithLatestComments(state.comments)
        },
        editComment(state, action) {
            state.comments = updateComment(state.comments, action.payload.text, action.payload.id)
        },
        setCurrentUser(state, action) {
            state.user = action.payload
        },
        setSortMode(state, action) {
            state.commentSort = action.payload
        },
        setCommentLike(state, action) {
            state.comments = likeComment(state.comments, action.payload)
        }
    }
})

export const CommentReducer = commentSlice.reducer;

export const {addNewComment, removeComment, mostLikeCommentSort, latestCommentSort,  editComment, setComments, setCurrentUser, setSortMode, setCommentLike} = commentSlice.actions;
