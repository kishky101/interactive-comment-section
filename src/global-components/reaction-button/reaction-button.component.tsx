import React from 'react';
import { IconType } from 'react-icons/lib';

import './reaction-button.styles.scss'

type ReactionButtonProp = {
    Icon: IconType;
    text: number;
    isLiked: boolean;
};

const ReactionButton:React.FC<ReactionButtonProp> = ({Icon, text, isLiked}) => {

    return (
        <div className='icon' style={{color: `${isLiked? '': 'var(--black-color-grad)'}`}}>
            <Icon className='icon__svg'/>
            <span>{text}</span>
        </div>
    )
}

export default ReactionButton;