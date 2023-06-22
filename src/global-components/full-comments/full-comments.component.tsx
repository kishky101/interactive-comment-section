import React from "react";
import FormInput from "../form-input/form-input.component";
import CommentOrder from "../comment-order/comment-order.component";
import Comments from "../comments/comments.component";

import './full-comments.styles.scss'

const FullComments = () => {
    return (
        <div className="full-comments">
            <FormInput />
            <CommentOrder />
            <Comments />
        </div>
    )
}

export default FullComments;