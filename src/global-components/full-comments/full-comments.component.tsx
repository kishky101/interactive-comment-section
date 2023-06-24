import React from "react";
import FormInput from "../form-input/form-input.component";
import CommentOrder from "../comment-order/comment-order.component";
import Comments from "../comments/comments.component";
import { commentCreator } from "@/utils/utils";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentUser, selectLastId } from "@/store/selector";
import { addNewComment } from "@/store/reducer";
import { useAppDispatch } from "@/store/store";


import './full-comments.styles.scss'

const FullComments = () => {
    const dispatch = useAppDispatch();
    // const comments = useSelector()

    const lastId: number = useSelector(selectLastId);
    console.log(lastId)
    const user = useSelector(selectCurrentUser);

    const addComment = (text: string, parentId?: number): void => {
        console.log('add', text)
        const newComment = commentCreator(lastId + 1, user, text, '2 min', parentId)
        console.log(newComment)
        dispatch(addNewComment(newComment));
        //return text;
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