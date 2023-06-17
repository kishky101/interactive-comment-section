import React from "react";
import ellieAlvaz from '../../assets/images/ellie-alvaz.png';
import more from '../../assets/images/more.svg';
import ReactionButton from "../reaction-button/reaction-button.component";
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import reply from '../../assets/images/reply.svg'

import './comment.styles.scss';

const Comment = () => {

    return (
        <div className="comment">
            <div className="comment__image">
                <img src={ellieAlvaz}/>
            </div>
            <div className="comment__body">
                <div className="comment__name">
                    <h5>Ellie Alvaz (You)</h5>
                    <span>5hr</span>
                </div>
                <div className="comment__text">
                    <p>What a strong song, thank you Miley for this awesome piece of self love and confidence.</p>
                </div>
                <div className="comment__footer">
                    <ReactionButton Icon={FaRegHeart} text="55" />
                    {/* <ReactionButton Icon={BsReply} text="Reply" /> */}
                    <div className="comment__reply">
                        <img src={reply} />
                        <span>Reply</span>
                    </div>
                    
                    {/* <FaHeart className="faHeart"/>
                    <FaReply className="faReply" /> */}
                </div>
            </div>
            <div className="comment__more">
                <img src={more}/>
            </div>
        </div>
    )
}

export default Comment;