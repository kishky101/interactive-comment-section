import React, {useState} from "react";
import ellieAlvaz from '../../assets/images/ellie-alvaz.png';
import kyleethompson from '../../assets/images/kylee-thomson.png';
import laurelfisher from '../../assets/images/laurel-fisher.png';
import more from '../../assets/images/more.svg';
import ReactionButton from "../reaction-button/reaction-button.component";
import {FaHeart, FaRegHeart, FaEdit, FaTrashAlt} from 'react-icons/fa';
import reply from '../../assets/images/reply.svg'
import { MockDataType } from "@/mock-comment-data";
import { addNewComment, removeComment, editComment, setCommentLike } from "@/store/reducer";
import { useAppDispatch } from "@/store/store";
import FormInput from "../form-input/form-input.component";
import { commentCreator } from "@/utils/utils";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectLastId } from "@/store/selector";
import { ActiveCommentType } from "../comments/comments.component";
import './comment.styles.scss';



type CommentProps = {
    comentObj: MockDataType;
    replyComments?: MockDataType[];
    activeComment: ActiveCommentType;
    setActiveComment: (obj: ActiveCommentType) => void
}

const Comment: React.FC<CommentProps> = ({comentObj, replyComments, activeComment, setActiveComment}) => {
    const {id, name, comment, time, likeCount, liked} = comentObj;
    const dispatch = useAppDispatch();

    const lastId: number = useSelector(selectLastId);

    const user = useSelector(selectCurrentUser);

    const [open, setOpen] = useState(false);


    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comentObj.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comentObj.id;
   
    const onClickHandler = () => setOpen(!open);

    const deleteHandler = () => {
        dispatch(removeComment(comentObj))
    }

    const replyHandler = () => {
        setActiveComment({id: comentObj.id, type: 'replying'})
        toggleReplying()
    }
    
    const editHandler = () => setActiveComment({id: comentObj.id, type: 'editing'})

    const addComment = (text: string) => {
        console.log('add', text)
        const newComment = commentCreator(lastId + 1, user, text, comentObj.parentId? comentObj.parentId: comentObj.id)
        dispatch(addNewComment(newComment));
        setActiveComment({id: comentObj.id, type: ''})
        return text;
    }

    const toggleReplying = () => {
        if (activeComment.type === 'replying') {
            setActiveComment({id: comentObj.id, type: ''})
        }
    }

    const updateComment = (text: string) => {
        dispatch(editComment({text, id}))
        setActiveComment({id: comentObj.id, type: ''})
    }

    const likeToggle = () => dispatch(setCommentLike(id));


    return (
        <div>
            {!isEditing && <div className="comment">
                <div className="comment__image">
                    <img src={(name === 'Ellie Alvaz')? ellieAlvaz: (name === 'Kylee Thomson')? kyleethompson: laurelfisher}/>
                </div>
                <div className="comment__body">
                    <div className="comment__name">
                        <h5>{name} {name === user? '(You)': ''}</h5>
                        <span>{time}</span>
                    </div>
                    {<div className="comment__text">
                        <p>{comment}</p>
                    </div>}
                    <div className="comment__footer">
                        <div onClick={likeToggle}>
                            <ReactionButton Icon={liked? FaHeart :FaRegHeart} text={likeCount} isLiked={liked} />
                        </div>
                        <div className="comment__reply" onClick={replyHandler}>
                            <img src={reply} />
                            <span>Reply</span>
                        </div>
                    </div>
                </div>
                {(name === user) && <div className="comment__more" onClick={onClickHandler}>
                    <img src={more}/>
                    <div className={`comment__more-options ${open? "comment__more-options--show": ""}`}> 
                        <p onClick={editHandler}>
                            <FaEdit />
                            <span>Edit</span>
                        </p>
                        <p onClick={deleteHandler}>
                            <FaTrashAlt />
                            <span>Delete</span>
                        </p>
                    </div>
                </div>}
            </div>}
            {isEditing && <FormInput submitHandler={updateComment} initialVal={comment} hasCancelButton={true} handleCancel={() => setActiveComment({id: comentObj.id, type: ''})}/>}
            {isReplying && 
            <FormInput submitHandler={addComment} />
            }
           {Boolean(replyComments?.length) && replyComments &&
           <div className="reply-comments">
                {replyComments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <Comment comentObj={comment} activeComment={activeComment} setActiveComment={setActiveComment}/>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Comment;