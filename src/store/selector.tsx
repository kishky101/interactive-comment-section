import { createSelector } from "reselect";
import { RootState } from "./store";

const selectReducer = (state: RootState) => state.commentReducer;

export const selectComments = createSelector([selectReducer], 
    (comment) => comment.comments
)

export const selectLastId = createSelector([selectComments],
    (Comments) => {
        if (Comments.length !== 0) {
            const sortedComments = [...Comments].sort((a, b) => a.id - b.id);
            return sortedComments[sortedComments.length - 1].id;
        }else {
            return 1;
        }

    }
)

export const selectSort = createSelector([selectReducer], 
    (comment) => comment.commentSort
)

export const selectCurrentUser = createSelector([selectReducer], 
    (comment) => comment.user
)

export const selectTotalComment = createSelector([selectComments], 
   (comment) =>  2304 + comment.length
)