import React from "react";
import ellieAlvaz from '../../assets/images/ellie-alvaz.png';
import kyleethompson from '../../assets/images/kylee-thomson.png';
import laurelfisher from '../../assets/images/laurel-fisher.png';
import more from '../../assets/images/more.svg';
import ReactionButton from "../reaction-button/reaction-button.component";
import {FaHeart, FaRegHeart, FaEdit, FaTrashAlt} from 'react-icons/fa';
import reply from '../../assets/images/reply.svg'
import { MockDataType } from "@/mock-comment-data";

import './comment.styles.scss';

type CommentProps = {
    name: string;
    comment: string;
    time: string;
    likeCount: number;
    replyComments?: MockDataType[];
}

const Comment: React.FC<CommentProps> = ({name, comment, time, likeCount, replyComments}) => {

    return (
        <div>
            <div className="comment">
                <div className="comment__image">
                    <img src={(name === 'Ellie Alvaz')? ellieAlvaz: (name === 'Kylee Thomson')? kyleethompson: laurelfisher}/>
                </div>
                <div className="comment__body">
                    <div className="comment__name">
                        <h5>{name} (You)</h5>
                        <span>{time}</span>
                    </div>
                    <div className="comment__text">
                        <p>{comment}</p>
                    </div>
                    <div className="comment__footer">
                        <ReactionButton Icon={FaRegHeart} text={likeCount} />
                        <div className="comment__reply">
                            <img src={reply} />
                            <span>Reply</span>
                        </div>
                    </div>
                </div>
                <div className="comment__more">
                    <img src={more}/>
                    <div className="comment__more-options"> 
                        <p>
                            <FaEdit />
                            <span>Edit</span>
                        </p>
                        <p>
                            <FaTrashAlt />
                            <span>Delete</span>
                        </p>
                    </div>
                </div>
            </div>
           {Boolean(replyComments?.length) && replyComments &&
           <div className="reply-comments">
                {replyComments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <Comment name={comment.name} time={comment.time} likeCount={comment.likeCount} comment={comment.comment} />
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Comment;