import React, {useEffect, useState} from 'react';
import Comment from '../comment/comment.component';
import MockData from '@/mock-comment-data';
import { MockDataType } from '@/mock-comment-data';

import './comments.styles.scss'

const Comments: React.FC = () => {
    const [comments, setComments] = useState<MockDataType[]>([]);
    const [replyComments, setReplyComments] = useState<MockDataType[]>([]);

    useEffect(() => {

        const data = MockData();
        //console.log(data)
        setComments(data);
        const replies = data.filter(comment => comment.parentId !== 'null')
        setReplyComments(replies);
    }, [])

    return (
        <div className='comments'>
            {
                
                comments.filter(comment => comment.parentId === 'null').map(commentObj =>  {
                    
                  
                    return (
                        <div key={commentObj.id}>
                        <Comment name={commentObj.name} comment={commentObj.comment} likeCount={commentObj.likeCount} time={commentObj.time} replyComments={replyComments.filter(comment => comment.parentId === commentObj.id)}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments;