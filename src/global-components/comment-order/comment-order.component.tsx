import React, {useState} from "react";
import arrow from '../../assets/images/arrow-down.svg';
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectTotalComment } from "@/store/selector";
import { mostLikeCommentSort, latestCommentSort } from "@/store/reducer";

import './comment-order.styles.scss'

const CommentOrder:React.FC = () => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const totalComment = useSelector(selectTotalComment)

    const onClickHandler = () => setOpen(!open);

    const bestCommentClickHandler = () => {
        dispatch(mostLikeCommentSort())
        setOpen(false)
    }
    const latestCommentClickHandler = () => {
        dispatch(latestCommentSort())
        setOpen(false)
    }

    return (
        <div className="comment-order">
            <div className="comment-order__count">
                <span>{totalComment} comment</span>
            </div>
            <div className="comment-order__sort">
                <div className="comment-order__dropdown" onClick={onClickHandler}>
                    <label htmlFor="sort">Sort by</label>
                    <img src={arrow} alt="down arrow" className={`comment-order__arrow ${open ? "comment-order__arrow--show" : ""}`}/>
                </div>
                <div className={`comment-order__options ${open ? "comment-order__options--show" : ""}`}> 
                    <label htmlFor="sort-best" onClick={bestCommentClickHandler}>
                        <input type='radio' value='Best comments' id="sort-best" name="sort" />Best comments
                    </label>
                    <label htmlFor="sort-latest" onClick={latestCommentClickHandler}>
                        <input type='radio' value={'From the latest'} id="sort-latest" name="sort" />From the latest
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CommentOrder;