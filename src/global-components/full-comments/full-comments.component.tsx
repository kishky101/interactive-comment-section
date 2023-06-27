import React from "react";
import FormInput from "../form-input/form-input.component";
import CommentOrder from "../comment-order/comment-order.component";
import Comments from "../comments/comments.component";
import { commentCreator } from "@/utils/utils";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentUser, selectLastId } from "@/store/selector";
import { addNewComment } from "@/store/reducer";
import { useAppDispatch } from "@/store/store";


import './full-comments.styles.scss'

const FullComments = () => {
    const dispatch = useAppDispatch();

    const lastId: number = useSelector(selectLastId);
 
    const user = useSelector(selectCurrentUser);

    const addComment = (text: string, parentId?: number): void => {
        const newComment = commentCreator(lastId + 1, user, text, parentId)
        dispatch(addNewComment(newComment));
    }

    return (
        <div className="full-comments">
            <FormInput submitHandler={addComment}/>
            <CommentOrder />
            <Comments />
        </div>
    )
}

export default FullComments;