import React, {useEffect, useState} from 'react';
import Comment from '../comment/comment.component';
import MockData from '@/mock-comment-data';
import { MockDataType } from '@/mock-comment-data';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useAppDispatch } from '@/store/store';
import { selectComments } from '@/store/selector';
import { setComments } from '@/store/reducer';

import './comments.styles.scss'

export type ActiveCommentType = {
    id: number;
    type: string;
}

const Comments: React.FC = () => {
    const comments = useSelector(selectComments);
    const dispatch = useAppDispatch()

    const [activeComment, setActiveComment] = useState<ActiveCommentType>({id: 0, type: ''});

    useEffect(() => {

        const data = MockData();
        dispatch(setComments(data));
    }, [])

    // const updateComment = (text: string, commentId: number) => {

    // }

    return (
        <div className='comments'>
            {  
                comments.filter(comment => comment.parentId === 0).map(commentObj =>  {
                    
                    return (
                        <div key={commentObj.id}>
                            <Comment comentObj={commentObj} replyComments={comments.filter(comment => comment.parentId !== 0).filter(comment => comment.parentId === commentObj.id)}  activeComment={activeComment} setActiveComment={setActiveComment}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments;