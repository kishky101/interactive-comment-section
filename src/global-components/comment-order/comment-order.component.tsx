import React, {useState} from "react";
import arrow from '../../assets/images/arrow-down.svg';

import './comment-order.styles.scss'

const CommentOrder:React.FC = () => {
    const [open, setOpen] = useState(false);

    const onClickHandler = () => setOpen(!open);

    return (
        <div className="comment-order">
            <div className="comment-order__count">
                <span>{2309} comment</span>
            </div>
            <div className="comment-order__sort">
                <div className="comment-order__dropdown" onClick={onClickHandler}>
                    <label htmlFor="sort">Sort by</label>
                    <img src={arrow} alt="down arrow" />
                </div>
                <div className={`comment-order__options ${open ? "comment-order__options--show" : ""}`}> 
                    <label htmlFor="sort-best">
                        <input type='radio' value='Best comments' id="sort-best" name="sort" />Best comments
                    </label>
                    <label htmlFor="sort-latest">
                        <input type='radio' value={'From the latest'} id="sort-latest" name="sort" />From the latest
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CommentOrder;