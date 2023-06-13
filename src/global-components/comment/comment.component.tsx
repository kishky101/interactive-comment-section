import React from "react";

import './comment.styles.scss';

const Comment = () => {
    return (
        <div className="comment">
            <div className="comment__image">
                <img />
            </div>
            <div className="comment__body">
                <div className="comment__name">
                    <h5>Ellie Alvaz</h5>
                    <span>5hr</span>
                </div>
                <div className="comment__text">
                    <p>What a strong song, thank you Miley for this awesome piece of self love and confidence.</p>
                </div>
                <div className="comment__footer"></div>
            </div>
            <div className="comment__more">
                <img />
            </div>
        </div>
    )
}

export default Comment;